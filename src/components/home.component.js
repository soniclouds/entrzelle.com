import React, { Component } from 'react';

import CTA from './connect/cta.js';
// import FB from './connect/fb.js';
// import Gallery from './gallery.component.js';
// import galleryPhotos from './gallery/images.js';

import '../assets/css/gallery.scss';
import '../assets/css/connect.scss';
import '../assets/css/home.scss';
import '../assets/css/_content-component.scss';

/* import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'; */




// test carousel images
import testImg1 from '../assets/img/photos/gallery/full/promo_band_2.jpg';
import testImg2 from '../assets/img/photos/gallery/full/promo_band_3.jpg';

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

        // console.log(testImg1);
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

                        <div className="component-wrapper--cta">
                            <CTA />
                        </div>

{/* 
                        <div className="gallery-photos">

                            {galleryPhotos.map(({ id, src, alt, caption }) => <a id={id} rel='lightshow' href={src.full} data-lightbox={this.lightboxGalleryName} data-title={caption}><img src={src.thumb} title={caption} alt={alt} /> </a>)}

                        </div>
 */}


                    {/* experimenting with carousel */}

                        <div id="demo" className="carousel slide" data-ride="carousel">

                            {/* <!-- Indicators --> */}
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                {/* <li data-target="#demo" data-slide-to="2"></li> */}
                            </ul>

                            {/* <!-- The slideshow --> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={testImg1} alt="test1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={testImg2} alt="test2"/>
                                </div>
                                {/* <div class="carousel-item">
                                    <img src="ny.jpg" alt="New York"/>
                                </div> */}
                            </div>

                            {/* <!-- Left and right controls --> */}
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>



                    </div>
                </div>

            </div>
        )
    }
}