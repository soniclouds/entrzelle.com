import React, { Component } from 'react';

import '../assets/css/home.scss';
import '../assets/css/_content-component.scss';

export default class Home extends Component {

    componentDidMount() {
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        // audioCol.style.height = window.innerHeight - contentTop + 'px';
    }

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
                <div className="component-content-container--inner">
                    home component
                </div>
            </div>
        )
    }
}