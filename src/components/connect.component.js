import React, { Component } from 'react';
 
import '../assets/css/connect.scss';

import FB from './connect/fb.js';

export default class Connect extends Component {
 
    componentDidMount(){
        this.initializeCss();
        this.setContainerHeight();
        window.addEventListener('resize', this.setContainerHeight);
    }

    initializeCss() {
        let innerConnectContainer = document.getElementById('connect--outer');
        innerConnectContainer.style.height = '0%';
        innerConnectContainer.style.visibility = 'hidden';
    }
    setContainerHeight() {
        
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('connect-component-container');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        

    }


    render() {
        return (
            <div id="connect-component-container">
                <div id="connect--outer" className="--outer">

                    <div className="connect-cta-container">
                        <div className="--inner">
                            
                            <div className='cta-links-header row'>
                                <span className='col-sm-6'>connect socially</span>
                                <span className='col-sm-6'>stream music</span>
                            </div>
                            
                            <div className="cta-links-container row">
                                <div className="--social-links col-sm-6">
                                    <a className='fa-facebook' href="https://www.facebook.com/entrzelle"><span>facebook</span></a>
                                    <a className='fa-twitter' href="https://www.twitter.com/entrzelle"><span>twitter</span></a>
                                    <a className='fa-youtube' href="https://www.youtube.com/user/Entrzelle"><span>youtube</span></a>
                                </div>
                                <div className="--music-links col-sm-6">
                                    <a className='fa-spotify' href="https://open.spotify.com/artist/7E07y9odlPu5zJcm8zjhkd"><span>spotify</span></a>
                                    <a className='fa-reverbnation' href="https://www.reverbnation.com/entrzelle"><span>reverbnation</span></a>
                                    <a className='fa-soundcloud' href="https://soundcloud.com/entrzelle"><span>soundcloud</span></a>
                                </div>
{/* 
                                <div className="--label-links col-sm-4">
                                    <a href="https://alfamatrix.bandcamp.com/">alfamatrix-bandcamp</a>
                                    <a href="https://alfa-matrix-store.com/">alfamatrix-website-store</a>
                                    <a href="http://www.alfa-matrix.com/">alfamatrix-website-home</a>
                                </div>
                                 */}
                            </div>
                            
                            <div className='cta-links-header row'>
                                <span className='col-sm-12'>email me</span>
                            </div>
                            
                            <div className="cta-email-container row">
                                <div className="--email-directly col-sm-12">
                                    <a className='fa-email' href="mailto:entrzelle@gmail.com"><span style={{display: 'none'}}>email me</span></a>
                                </div>
                            </div>

                            <div className='cta-links-header row'>
                                <span className='col-sm-12'>label info</span>
                            </div>
                                
                            <div className="cta-label-container row">
                                <div className="--label col-sm-12">
                                    <a className='fa-label' href="https://alfa-matrix-store.com/"><span style={{display: 'none'}}>label info</span></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="component-wrapper--fb">
                        <FB />
                    </div>
                
                </div>
            </div>
        )
    }
}