/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/main.scss';
import '../assets/css/header.scss';

export default class Header extends Component {

    // toggle height + visibility for transition effect
    toggleConnectModal(e) {

        let outerConnectContainer = document.getElementById('connect-component-container'), 
            innerConnectContainer = document.getElementById('connect--outer');

        // when 'connect' nav link is clicked, toggle normally
        if (e.target.className === 'connect-toggle') {
            if (innerConnectContainer.style.height !== '0%') {
                innerConnectContainer.style.height = '0%'; 
                innerConnectContainer.style.visibility = 'hidden'; 
                setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 500);
            } else {
                innerConnectContainer.style.height = '100%'; 
                innerConnectContainer.style.visibility = 'visible';
                outerConnectContainer.style.zIndex = '1';
            } 
        } else {
            // for all other links, toggle modal off
            if (innerConnectContainer.style.height !== '0%') {
                innerConnectContainer.style.height = '0%';
                innerConnectContainer.style.visibility = 'hidden';
                setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 500);
            }
        }
    
    }

    render() {
        return (
            <header id="page-header">
                <div className="header">
                    <Link className="header-logo" onClick={this.toggleConnectModal}to="/"></Link>
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
                                        <Link to="/news" onClick={this.toggleConnectModal}>News</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/releases" onClick={this.toggleConnectModal}>Releases</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/gallery" onClick={this.toggleConnectModal}>Gallery</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/reviews" onClick={this.toggleConnectModal}>Reviews</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/lyrics" onClick={this.toggleConnectModal}>Lyrics</Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a style={{cursor: 'pointer'}} onClick={this.toggleConnectModal} className="connect-toggle">Connect</a>
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