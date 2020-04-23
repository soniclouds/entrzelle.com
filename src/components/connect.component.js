import React, { Component } from 'react';
 
import '../assets/css/connect.scss';

export default class Connect extends Component {
 
    componentDidMount(){
        this.initializeCss();
        this.setContainerHeight();
        window.addEventListener('resize', this.setContainerHeight);
    }

    initializeCss() {
        let innerConnectContainer = document.getElementById('connect--outer');
        innerConnectContainer.style.height = '0%';
        innerConnectContainer.style.visibility = 'hidden';
    }
    setContainerHeight() {
        
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('connect-component-container');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        

    }


    render() {
        return (
            <div id="connect-component-container">
                <div id="connect--outer" className="--outer">

                    {/* <div className="component-content-container--inner"> */}
                        connect component contents here
                    {/* </div> */}
                
                </div>
            </div>
        )
    }
}