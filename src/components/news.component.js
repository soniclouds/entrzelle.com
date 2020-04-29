import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';

import { setContentContainerHeight, setPageTitle } from '../assets/js/components/Content.js';

import '../assets/css/ContentComponent.scss';
import '../assets/css/news.scss';

const strapi = new Strapi('http://localhost:1337');

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        setPageTitle('News');

        this.handleNewsApiData();   
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);
    }

    async handleNewsApiData() {
        try {
            const newsPosts = await strapi.getEntries('news');

            // sanitize HTML for security (non-issue for owner-generated content, but best practice in general)
            newsPosts.forEach(p => {
                let dirtyTitle = p.title,
                    cleanTitle = DOMPurify.sanitize(dirtyTitle),
                    dirtyContent = p.content,
                    cleanContent = DOMPurify.sanitize(dirtyContent);
                p.title = cleanTitle;
                p.content = cleanContent;

                // NOTE: trying to figure out media rendering... commenting out for now (leaving for reference)
                // if (p.media[0]) {
                //     let mediaUrl = "http://localhost:1337/uploads/" + p.media[0].hash + p.media[0].ext;
                //     console.log('media found: ', mediaUrl);
                //     p.mediaUrl = mediaUrl;
                // }
                // console.log('checking media: ', p.media[0]);
                // console.log('checking media url: ', p.media[0].url);
                // }
            });

            this.setState({ posts: newsPosts.reverse() });

        }
        catch (err) {
            alert(err);
        }
    }

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">

                <div className="component-content-container--inner">

                    {this.state.posts.map(post =>

                        <div key={post.id} className="news-content">
                        
                            <div className="content-title">
                                <h1 dangerouslySetInnerHTML={{ __html: post.title}}></h1>
                                <h6>{new Date(post.date).toDateString()}</h6>
                            </div>
                            <div className="content-data">

                                {/* note: dangerouslySetInnerHTML is safe here because HTML was previously sanitized by DOMPurify */}
                                <div className="news-detail" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                
                                {/* note: the only way I've figured out how to include external media embeds is with the iframe code, but this will not work in 'content' property due to sanitizing above -- including in separate field 'embedCode' without sanitizing -- this may become a security issue later, so keep an eye on this -- more of a temporary solution for now */}
                                <div className="_embed" dangerouslySetInnerHTML={{__html: post.embedCode}}></div>

                                {/* note: can't figure out how to render contents of 'media' field -- commenting out for now */}
                                <div className="_media-upload">
                                    {/* <img src={post.media[0].url}/> */}
                                </div>
                                
                            </div>
                            
                        </div> // news content
                    )}
                        
                </div>

            </div>
        )
    }
}