import React, { Component } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

import closeBtn from 'lightbox2/dist/images/close.png';
import loadingBtn from 'lightbox2/dist/images/loading.gif';
import prevBtn from 'lightbox2/dist/images/prev.png';
import nextBtn from 'lightbox2/dist/images/next.png';

import '../assets/css/gallery.scss';

import _image1_thumb from '../assets/img/photos/gallery/thumbs/200/promo_band_1.jpg';
import _image2_thumb from '../assets/img/photos/gallery/thumbs/200/promo_band_2.jpg';

import _image1_full from '../assets/img/photos/gallery/full/promo_band_1.jpg';
import _image2_full from '../assets/img/photos/gallery/full/promo_band_2.jpg';


export default class Gallery extends Component {

    componentDidMount() {
        lightbox.option({
            'showImageNumberLabel': false
        })
    }

    photos = [
        {   
            src: {
                // full: 'https://imagery.zoogletools.com/u/64729/42f521f95519635214049aea191f2999506a2674/photo/postcard1-b.jpg',
                thumb: _image1_thumb,
                full: _image1_full
            },
            // width: 1,
            // height: 1
        },
        {
            src: {
                // full: 'https://imagery.zoogletools.com/u/64729/42f521f95519635214049aea191f2999506a2674/photo/postcard1-b.jpg',
                thumb: _image2_thumb,
                full: _image2_full
            },
            // width: 1,
            // height: 1
        },
        
    ];


    render() {
        return (
            <div>

                <div className="gallery-photos">
                    <a href={this.photos[0].src.full} data-lightbox="mygallery"  data-title="photo by Rico JC">
                        <img src={this.photos[0].src.thumb} alt="test-thumb-1"/>
                    </a>
                    <a href={this.photos[1].src.full} data-lightbox="mygallery">
                        <img src={this.photos[1].src.thumb} alt="test-thumb-2"/>
                    </a>
                    {/* {images.map(({ id, src, title }) => <img key={id} src={src} title={title} alt={title} />)} */}
                </div>
                
            </div>
        )
    }
}