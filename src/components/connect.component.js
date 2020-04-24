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
                            <div className="cta-links-container row">
                                <div className="--social-links col-sm-4">
                                    <a href="https://www.facebook.com/entrzelle">facebook</a>
                                    <a href="https://www.twitter.com/entrzelle">twitter</a>
                                    <a href="https://www.youtube.com/user/Entrzelle">youtube</a>
                                </div>
                                <div className="--music-links col-sm-4">
                                    <a href="https://open.spotify.com/artist/7E07y9odlPu5zJcm8zjhkd">spotify</a>
                                    <a href="https://www.reverbnation.com/entrzelle">reverbnation</a>
                                    <a href="https://soundcloud.com/entrzelle">soundcloud</a>
                                </div>
                                <div className="--label-links col-sm-4">
                                    <a href="https://alfamatrix.bandcamp.com/">alfamatrix-bandcamp</a>
                                    <a href="https://alfa-matrix-store.com/">alfamatrix-website-store</a>
                                    <a href="http://www.alfa-matrix.com/">alfamatrix-website-home</a>
                                </div>
                            </div>
                            <div className="cta-email-container row">
                                <div className="--email-directly col">
                                    <a href="mailto:entrzelle@gmail.com">email me directly</a>
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