/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from './navigation.component.js';
import { toggleConnectModal } from '../assets/js/components/connect.js';
import '../assets/css/main.scss';
import '../assets/css/header.scss';

export default class Header extends Component {

    render() {
        return (
            <header id="page-header">
                <div className="header">
                    <Link className="header-logo" onClick={toggleConnectModal}to="/"></Link>
                </div>

                <Nav />

            </header>
            
        )
    }
}