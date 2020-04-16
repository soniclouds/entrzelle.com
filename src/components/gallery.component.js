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
            'showImageNumberLabel': false,
        })
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
    }

    lightboxGalleryName = "gallery-photos";

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
                <div className="component-content-container--inner">
                    <div className="gallery-photos">
                                            
                        {galleryPhotos.map(({ id, src, alt, caption }) => <a id={id} href={src.full} data-lightbox={this.lightboxGalleryName} data-title={caption}><img src={src.thumb} title={caption} alt={alt} /> </a>)}
                    
                    </div>
                </div>
            </div>
        )
    }
}