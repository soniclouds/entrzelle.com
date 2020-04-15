import React, { Component } from 'react';

import '../assets/css/gallery.scss';

import _image1_thumb from '../assets/img/photos/gallery/thumbs/200/promo_band_1.jpg';
import _image2_thumb from '../assets/img/photos/gallery/thumbs/200/promo_band_2.jpg';

import _image1_full from '../assets/img/photos/gallery/full/promo_band_1.jpg';
import _image2_full from '../assets/img/photos/gallery/full/promo_band_2.jpg';


export default class Gallery extends Component {

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
                    <a href={this.photos[0].src.full} >
                        <img src={this.photos[0].src.thumb} alt="test-thumb-1"/>
                    </a>
                    <a href={this.photos[1].src.full}>
                        <img src={this.photos[1].src.thumb} alt="test-thumb-2"/>
                    </a>
                    {/* {images.map(({ id, src, title }) => <img key={id} src={src} title={title} alt={title} />)} */}
                </div>
                
            </div>
        )
    }
}