import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

import '../assets/css/news.scss';
import '../assets/css/_content-component.scss';

const strapi = new Strapi('http://localhost:1337');

export default class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

    }

    async componentDidMount() {
        
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);

        try {
            const newsPosts = await strapi.getEntries('news');
            // console.log('checking type of newPosts: ', Array.isArray(newsPosts));
            this.setState({ posts: newsPosts });

            console.log("checking this.state.posts: ", this.state.posts);
        }
            catch (err) {
            alert(err);
        }
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
    }


    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">

                <div className="component-content-container--inner">

                    {this.state.posts.map(post =>
                        <div className="news-content">
                        
                            <div className="content-title">
                                <h1>{post.title}</h1>
                                <h6>date here</h6>
                            </div>
                            <div className="content-data">
                                <div className="news-detail">
                                    {post.content}
                                </div>
                                
                            </div>
                            
                        </div> // news content
                    )}

                    

                        
                       

                        
                </div>

            </div>
        )
    }
}