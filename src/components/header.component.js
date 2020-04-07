import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/main.scss';

export default class Header extends Component {


    clickContact() {

    }

    render() {
        return (
            <header id="page-header">
                {/* <div className="spacer--header">
                    
                </div> */}
                <div className="header">
                    <a className="header-logo" href="/"></a>
                </div>
                <div className="nav-bar">
                    <div className="site-content-wrap">
                        <span id="toggle-mobile-menu" className="toggle-mobile-menu">
                            <a href="javascript:">
                                <i className="icon-hamburger"></i>
                            </a>
                        </span>
                        <nav id="main-nav" className="desktop">
                            <ul className="">
                                {/* <li>
                                    <div>
                                        <a href="/">Home</a>
                                    </div>
                                </li> */}
                                {/* <li>
                                    <div>
                                        <a href="/info">Info</a>
                                    </div>
                                </li> */}
                                <li>
                                    <div>
                                        <a href="/releases">Releases</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="/gallery">Gallery</a>
                                    </div>
                                </li>
                                {/* <li>
                                    <div>
                                        <a href="/shop">Shop</a>
                                    </div>
                                </li> */}
                                <li>
                                    <div>
                                        <a href="/review">Reviews</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="/lyrics">Lyrics</a>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className='nav-contact'>
                                        <a href="javascript:void()">Contact</a>
                                        <div className="social-icon-links">
                                            <a href="https://www.facebook.com/entrzelle">FB</a>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


            
        
            
        )
    }
}