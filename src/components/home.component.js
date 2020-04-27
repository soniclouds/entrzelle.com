import React, { Component } from 'react';

import CTA from './connect/cta.js';
import { setContentContainerHeight} from '../assets/js/components/Content.js';
import galleryPhotos from './_data/gallery/images.js';

import '../assets/css/ContentComponent.scss';
import '../assets/css/gallery.scss';
import '../assets/css/connect.scss';
import '../assets/css/home.scss';

export default class Home extends Component {

    componentDidMount() {

        this.renderCarouselImages();

        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);

        console.log(galleryPhotos);
    }

    renderCarouselImages() {
        
        let carouselContainer = document.getElementById('carousel-inner');

        let html = '';

        // generate html using galleryPhotos
        for (let i = 0; i < galleryPhotos.length; i++) {
            // note: excluding live photos (current preference -- subject to change)
            if (galleryPhotos[i].id.includes('promo')) {
                // set active for first photo
                if (i === 0) {
                    html += '<div class="carousel-item active"><a href="/gallery"><img class="carousel-img" src=' + galleryPhotos[i].src.full + ' alt='+ galleryPhotos[i].alt +'/></a></div>'
                } else {
                    html += '<div class="carousel-item"><a href="/gallery"><img class="carousel-img" src=' + galleryPhotos[i].src.full + ' alt=' + galleryPhotos[i].alt +'/></a></div>'
                }
            }
        }

        carouselContainer.innerHTML = html;

    }

    render() {
        return (
            <div id="home-component">
            
                <div id="ccc-outer" className="component-content-container--outer">
                    <div className="component-content-container--inner">

                        <div className="component-wrapper--cta">
                            <CTA />
                        </div>


                        <div id="home-carousel" className="carousel slide" data-ride="carousel">

                            {/* <!-- Indicators --> */}
                            {/* note: disabling due to design preference -- leaving for future reference */}
                            {/* <ul className="carousel-indicators">
                                <li data-target="#home-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#home-carousel" data-slide-to="1"></li>
                            
                            </ul> */}

                            {/* <!-- The slideshow --> */}
                            <div id="carousel-inner" className="carousel-inner">
                                {/* note: images rendered dynamically on load by renderCarouselImages() */}
                            </div>

                            {/* <!-- Left and right controls --> */}
                            <a className="carousel-control carousel-control-prev" href="#home-carousel" data-slide="prev">
                                <span id="carousel-nav-prev" className="carousel-nav carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control carousel-control-next" href="#home-carousel" data-slide="next">
                                <span id="carousel-nav-next" className="carousel-nav carousel-control-next-icon"></span>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}