import React, { Component } from 'react';
 
import '../assets/css/footer.scss';

export default class Footer extends Component {
 
    render() {
        return (
            <div id="footer-component">
                <div className="copyright">
                    <span>website by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/soniclouds/">David Chamberlin</a> | &copy; 2020 Entrzelle  All Rights Reserved</span>
                </div>
            </div>
        )
    }
}