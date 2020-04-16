import React, { Component } from 'react';

import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

import '../assets/css/gallery.scss';
import '../assets/css/_content-component.scss';

import galleryPhotos from './gallery/images';


export default class Gallery extends Component {

    componentDidMount() {
        lightbox.option({
            'showImageNumberLabel': false
        })
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
                    <div className="gallery-photos">
                        <a href={galleryPhotos[0].src.full} data-lightbox="mygallery"  data-title={galleryPhotos[0].caption}>
                            <img src={galleryPhotos[0].src.thumb} alt={galleryPhotos[0].alt}/>
                        </a>
                        <a href={galleryPhotos[1].src.full} data-lightbox="mygallery" data-title={galleryPhotos[1].caption}>
                            <img src={galleryPhotos[1].src.thumb} alt={galleryPhotos[1].alt}/>
                        </a>
                        {/* {images.map(({ id, src, title }) => <img key={id} src={src} title={title} alt={title} />)} */}
                    </div>
                </div>
            </div>
        )
    }
}