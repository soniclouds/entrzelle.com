import React, { Component } from 'react';

import { setContentContainerHeight } from '../assets/js/components/Content.js';

import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

import '../assets/css/ContentComponent.scss';
import '../assets/css/gallery.scss';

import galleryPhotos from './_data/gallery/images';

export default class Gallery extends Component {

    componentDidMount() {
        lightbox.option({
            'showImageNumberLabel': false,
        })
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);
    }

    lightboxGalleryName = "gallery-photos";

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
                <div className="component-content-container--inner">
                    <div className="gallery-photos">
                                            
                        {galleryPhotos.map(({ id, src, alt, caption }) => <a key={id} id={id} href={src.full} data-lightbox={this.lightboxGalleryName} data-title={caption}><img src={src.thumb} title={caption} alt={alt} /> </a>)}
                    
                    </div>
                </div>
            </div>
        )
    }
}