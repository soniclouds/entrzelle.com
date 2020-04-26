import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';

import { setContentContainerHeight } from '../assets/js/components/content.js';

import '../assets/css/reviews.scss';
import '../assets/css/_content-component.scss';

import _coverTPC from '../assets/img/releases/TPC.jpg';
import _coverPOTM from '../assets/img/releases/POTM.jpg';
import _coverSTWOF from '../assets/img/releases/STWOF.jpg';

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
                if (reviewsPosts[i].album === this.albumInfo.tpc.albumTitle) {
                    _reviewsTPC.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === this.albumInfo.potm.albumTitle) {
                    _reviewsPOTM.push(reviewsPosts[i]);
                }
                if (reviewsPosts[i].album === this.albumInfo.stwof.albumTitle) {
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


    albumInfo = {
        tpc: {
            albumTitle: "Total Progressive Collapse",
            alt: "Total Progressive Collapse - album reviews",
            img: _coverTPC,
            label: "Alfa Matrix",
            releaseInfo: "released April 15, 2016 - 2CD LP",
        },
        potm: {
            albumTitle: "Part Of The Movement (Bonus Tracks Version)",
            alt: "Part Of The Movement - album reviews",
            img: _coverPOTM,
            label: "Alfa Matrix",
            releaseInfo: "released June 19, 2015 - digital LP",
        },
        stwof: {
            albumTitle: "Set These Walls On Fire",
            alt: "Set These Walls On Fire - album reviews",
            img: _coverSTWOF,
            label: "Alfa Matrix",
            releaseInfo: "released June 19, 2015 - digital EP",
        },

    };

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
              
                <div className="component-content-container--inner">

                    <div className="reviews-content">

                        {/* TPC */}

                        <div className="content-title">
                            <img src={this.albumInfo.tpc.img} alt={this.albumInfo.tpc.alt}/>
                            <div className="title-description">
                                <h1>{this.albumInfo.tpc.albumTitle}</h1>
                                <p>{this.albumInfo.tpc.releaseInfo}</p>
                                <p>{this.albumInfo.tpc.label}</p>
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
                            <img src={this.albumInfo.potm.img} alt={this.albumInfo.potm.alt} />
                            <div className="title-description">
                                <h1>{this.albumInfo.potm.albumTitle}</h1>
                                <p>{this.albumInfo.potm.releaseInfo}</p>
                                <p>{this.albumInfo.potm.label}</p>
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
                            <img src={this.albumInfo.stwof.img} alt={this.albumInfo.stwof.alt} />
                            <div className="title-description">
                                <h1>{this.albumInfo.stwof.albumTitle}</h1>
                                <p>{this.albumInfo.stwof.releaseInfo}</p>
                                <p>{this.albumInfo.stwof.label}</p>
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