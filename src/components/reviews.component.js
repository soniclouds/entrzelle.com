import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';

import albumInfo from './_data/reviews.js';

import { setContentContainerHeight } from '../assets/js/components/Content.js';

import '../assets/css/ContentComponent.scss';

import '../assets/css/reviews.scss';

const strapi = new Strapi('http://localhost:1337');

export default class Reviews extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            reviewsTPC: [],
            reviewsPOTM: [],
            reviewsSTWOF: []
        }
    }

    async componentDidMount() {
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);

        try {
            // fetch reviews and sanitize content field
            const reviewsPosts = await strapi.getEntries('reviews');
            reviewsPosts.forEach(p => {
                let dirty = p.content,
                    clean = DOMPurify.sanitize(dirty);
                p.content = clean;

            });
            // then, parse reviews based on album
            // NOTE: this should be refactored
            const _reviewsTPC = [],
                  _reviewsPOTM = [],
                  _reviewsSTWOF = [];

            for (var i = 0; i < reviewsPosts.length; i++) {
                if (reviewsPosts[i].album === albumInfo.tpc.albumTitle) {
                    _reviewsTPC.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === albumInfo.potm.albumTitle) {
                    _reviewsPOTM.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === albumInfo.stwof.albumTitle) {
                    _reviewsSTWOF.push(reviewsPosts[i]);
                }
            }

            this.setState({
                reviewsTPC: _reviewsTPC,
                reviewsPOTM: _reviewsPOTM,
                reviewsSTWOF: _reviewsSTWOF
            });

        }
        catch (err) {
            alert(err);
        }
    }


    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
              
                <div className="component-content-container--inner">

                    <div className="reviews-content">

                        {/* TPC */}

                        <div className="content-title">
                            <img src={albumInfo.tpc.img} alt={albumInfo.tpc.alt}/>
                            <div className="title-description">
                                <h1>{albumInfo.tpc.albumTitle}</h1>
                                <p>{albumInfo.tpc.releaseInfo}</p>
                                <p>{albumInfo.tpc.label}</p>
                            </div>
                        </div>

                    {this.state.reviewsTPC.map(post =>

                        <div className="content-data">

                            <div className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {post.publication}
                                    </h2>
                                    <p className="review-date">
                                        {post.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={post.link}>
                                            original article
                                        </a>
                                    </p>
                                    <div className="review-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                                </div>

                                

                            </div>

                        </div>
                    )}

                        {/* POTM */}

                        <div className="content-title">
                            <img src={albumInfo.potm.img} alt={albumInfo.potm.alt} />
                            <div className="title-description">
                                <h1>{albumInfo.potm.albumTitle}</h1>
                                <p>{albumInfo.potm.releaseInfo}</p>
                                <p>{albumInfo.potm.label}</p>
                            </div>
                        </div>

                    {this.state.reviewsPOTM.map(post =>

                        <div className="content-data">

                            <div className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {post.publication}
                                    </h2>
                                    <p className="review-date">
                                        {post.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={post.link}>
                                            original article
                                        </a>
                                    </p>
                                    <div className="review-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                </div>

                            </div>

                        </div>

                    )}

                  
                        {/* STWOF */}

                        <div className="content-title">
                            <img src={albumInfo.stwof.img} alt={albumInfo.stwof.alt} />
                            <div className="title-description">
                                <h1>{albumInfo.stwof.albumTitle}</h1>
                                <p>{albumInfo.stwof.releaseInfo}</p>
                                <p>{albumInfo.stwof.label}</p>
                            </div>
                        </div>

                    {this.state.reviewsSTWOF.map(post =>

                        <div className="content-data">

                            <div className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {post.publication}
                                    </h2>
                                    <p className="review-date">
                                        {post.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={post.link}>
                                            original article
                                        </a>
                                    </p>
                                    <div className="review-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    </div> {/* reviews content */}
                    
                </div>
 
            </div>
        )
    }
}