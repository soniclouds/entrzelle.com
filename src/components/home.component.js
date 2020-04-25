import React, { Component } from 'react';

import CTA from './connect/cta.js';
// import FB from './connect/fb.js';
// import Gallery from './gallery.component.js';
// import galleryPhotos from './gallery/images.js';

import '../assets/css/gallery.scss';
import '../assets/css/connect.scss';
import '../assets/css/home.scss';
import '../assets/css/_content-component.scss';

// import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';
// import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

export default class Home extends Component {

    componentDidMount() {
        // lightbox.option({
        //     'showImageNumberLabel': false,
        // })
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        // audioCol.style.height = window.innerHeight - contentTop + 'px';
    }

    // lightboxGalleryName = "home-slideshow";

    render() {
        return (
            <div id="home-component">
            
                <div id="ccc-outer" className="component-content-container--outer">
                    <div className="component-content-container--inner">
                        {/* <div id="connect-component-container">
                            <div id="connect--outer" className="--outer"> */}
                                <div className="component-wrapper--cta">
                                    <CTA />
                                </div>

                                {/* <div className="component-wrapper--fb"> */}
                                    {/* <FB /> */}
                                {/* </div> */}

                                {/* <Gallery /> */}

                            {/* </div>
                        </div> */}

{/* 
                        <div className="gallery-photos">

                            {galleryPhotos.map(({ id, src, alt, caption }) => <a id={id} rel='lightshow' href={src.full} data-lightbox={this.lightboxGalleryName} data-title={caption}><img src={src.thumb} title={caption} alt={alt} /> </a>)}

                        </div>
 */}
                    </div>
                </div>

            </div>
        )
    }
}