import React, { Component } from 'react';

import CTA from './connect/cta.js';
// import FB from './connect/fb.js';
// import Gallery from './gallery.component.js';
import galleryPhotos from './gallery/images.js';

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

export default class Home extends Component {

    componentDidMount() {

        this.setSideColumnHeight();
        // this.setCarouselNavHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
        // window.addEventListener('resize', this.setCarouselNavHeight);

    }
/* 
    setCarouselNavHeight() {

        if (document.getElementsByClassName('carousel-nav')){
            // var carouselImages = [...document.getElementsByClassName('carousel-img')];
            // carouselImages.map(img => img.style.height = window.innerHeight - '200' + 'px');
            // console.log('adjusted carousel image height');
        }
    }
 */
    setSideColumnHeight() {
        var contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';

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

                        <div id="home-carousel" className="carousel slide" data-ride="carousel">

                            {/* <!-- Indicators --> */}
                            {/* <ul className="carousel-indicators">
                                <li data-target="#home-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#home-carousel" data-slide-to="1"></li>
                            
                            </ul> */}

                            {/* <!-- The slideshow --> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='carousel-img' src={testImg1} alt="test1"/>
                                </div>
                                <div className="carousel-item">
                                    <img className='carousel-img' src={testImg2} alt="test2"/>
                                </div>

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