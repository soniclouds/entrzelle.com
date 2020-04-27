import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';
import releaseData from './_data/releases.js';
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
        this.handleApiData();
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);
    }

    async handleApiData() {
        try {
            // fetch reviews and sanitize content field
            const reviewsPosts = await strapi.getEntries('reviews');
            reviewsPosts.forEach(p => {
                let dirty = p.content,
                    clean = DOMPurify.sanitize(dirty);
                p.content = clean;

            });
            // then, parse reviews based on album
            // NOTE: this should be refactored at a later time
            const _reviewsTPC = [],
                _reviewsPOTM = [],
                _reviewsSTWOF = [];

            for (var i = 0; i < reviewsPosts.length; i++) {
                if (reviewsPosts[i].album === releaseData.studio.tpc.title.short) {
                    _reviewsTPC.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === releaseData.studio.potm.title.short) {
                    _reviewsPOTM.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === releaseData.studio.stwof.title.short) {
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
                            <img src={releaseData.studio.tpc.cover} alt={releaseData.studio.tpc.alt}/>
                            <div className="title-description">
                                <h1>{releaseData.studio.tpc.title.short}</h1>
                                <p>{releaseData.studio.tpc.date.long}</p>
                                <p>{releaseData.studio.tpc.label}</p>
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
                            <img src={releaseData.studio.potm.cover} alt={releaseData.studio.potm.alt} />
                            <div className="title-description">
                                <h1>{releaseData.studio.potm.title.short}</h1>
                                <p>{releaseData.studio.potm.date.long}</p>
                                <p>{releaseData.studio.potm.label}</p>
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
                            <img src={releaseData.studio.stwof.cover} alt={releaseData.studio.stwof.alt} />
                            <div className="title-description">
                                <h1>{releaseData.studio.stwof.title.short}</h1>
                                <p>{releaseData.studio.stwof.date.long}</p>
                                <p>{releaseData.studio.stwof.label}</p>
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