import React, { Component } from 'react';
 
import '../assets/css/footer.scss';

export default class Footer extends Component {
 
    render() {

        let year = new Date().getFullYear();

        return (
            <div id="footer-component">
                <div className="copyright">
                    {/* <span>website by David Chamberlin | &copy; {year} Entrzelle All Rights Reserved</span> */}
                    <span>&copy; {year} Entrzelle All Rights Reserved</span>
                </div>
            </div>
        )
    }
}