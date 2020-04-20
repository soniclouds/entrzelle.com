import React, { Component } from 'react';

import '../assets/css/news.scss';
import '../assets/css/_content-component.scss';


export default class News extends Component {


    componentDidMount() {
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
    }


    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">

                <div className="component-content-container--inner">

                    <div className="news-content">

                        NEWS HERE

                        <div className="content-title">
                            
                        </div>

                        <div className="content-data">

                           
                        </div>

                        
                    </div> {/* news content */}

                </div>

            </div>
        )
    }
}