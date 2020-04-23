/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/main.scss';
import '../assets/css/header.scss';

export default class Header extends Component {

    // toggle height + visibility for transition effect
    toggleConnectModal() {
        
        let innerConnectContainer = document.getElementById('connect--outer');

        if (innerConnectContainer.style.height !== '0%') {
            innerConnectContainer.style.height = '0%'; 
            innerConnectContainer.style.visibility = 'hidden'; 
        } else {
            innerConnectContainer.style.height = '100%'; 
            innerConnectContainer.style.visibility = 'visible';
        } 
    
    }

    render() {
        return (
            <header id="page-header">
                <div className="header">
                    <Link className="header-logo" to="/"></Link>
                </div>
                <div className="nav-bar">
                    <div className="site-content-wrap">
                        {/* <span id="toggle-mobile-menu" className="toggle-mobile-menu">
                            <a href="javascript:void()">
                                <i className="icon-hamburger"></i>
                            </a>
                        </span> */}
                        <nav id="main-nav" className="desktop">
                            <ul className="">
                                <li>
                                    <div>
                                        <Link to="/news">News</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/releases">Releases</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/gallery">Gallery</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/reviews">Reviews</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/lyrics">Lyrics</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a onClick={this.toggleConnectModal} className="anchor-placeholder">Connect</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


            
        
            
        )
    }
}