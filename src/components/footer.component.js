import React, { Component } from 'react';
 
import '../assets/css/footer.scss';

export default class Footer extends Component {
 
    render() {
        return (
            <div id="footer-component">
                <div className="copyright">
                    <span>website by David Chamberlin | &copy; 2022 Entrzelle  All Rights Reserved</span>
                </div>
            </div>
        )
    }
}