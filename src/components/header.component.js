/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from './navigation.component.js';
import { toggleConnectModal } from '../assets/js/components/connect.js';
import '../assets/css/main.scss';
import '../assets/css/header.scss';

import { indicateSelectedLink } from '../assets/js/components/navigation.js';


export default class Header extends Component {

    componentDidMount() {
        Array.from(document.getElementsByClassName('header-logo')).map(h => h.addEventListener('click', indicateSelectedLink));
    }

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