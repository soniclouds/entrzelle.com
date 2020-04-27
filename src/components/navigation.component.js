/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { toggleConnectModal } from '../assets/js/components/connect.js';

export default class Navigation extends Component {
 
    render() {
        return (
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
                                    <Link to="/news" onClick={toggleConnectModal}>News</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/releases" onClick={toggleConnectModal}>Releases</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/gallery" onClick={toggleConnectModal}>Gallery</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/reviews" onClick={toggleConnectModal}>Reviews</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/lyrics" onClick={toggleConnectModal}>Lyrics</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a style={{ cursor: 'pointer' }} onClick={toggleConnectModal} className="connect-toggle">Connect</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}