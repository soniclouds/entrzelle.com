import React, { Component } from 'react';
 
import '../assets/css/connect.scss';

export default class Connect extends Component {
 
    componentDidMount(){
        this.setContainerHeight();
        window.addEventListener('resize', this.setContainerHeight);
    }

    setContainerHeight() {
        // let contentTop = document.getElementById('connect--outer').offsetTop,
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('connect--outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        // audioCol.style.height = window.innerHeight - contentTop + 'px';

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