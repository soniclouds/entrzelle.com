import React, { Component } from 'react';
 
import CTA from './connect/cta.js';
import FB from './connect/fb.js';

import '../assets/css/connect.scss';

export default class Connect extends Component {
 
    componentDidMount(){
        this.initializeConnectCss();
        this.setConnectContainerHeight();
        window.addEventListener('resize', this.setContainerHeight);
    }

    initializeConnectCss() {
        let innerConnectContainer = document.getElementById('connect--outer');
        innerConnectContainer.style.height = '0%';
        innerConnectContainer.style.visibility = 'hidden';
    }

    // note: slightly modified version of 'setContentContainerHeight' to target connect container -- no need to modularize out at this time because this should only be used by connect component
    setConnectContainerHeight() {

        let contentTop = document.getElementById('ccc-outer').offsetTop,
        contentContainer = document.getElementById('connect-component-container');
        
        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';

    }

    render() {
        return (
            <div id="connect-component-container">
                <div id="connect--outer" className="connect-outer">

                    <div className="component-wrapper--cta">
                        <CTA />
                    </div>

                    <div className="component-wrapper--fb">
                        <FB />
                    </div>
                
                </div>
            </div>
        )
    }
}