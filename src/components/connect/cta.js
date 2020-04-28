import React, { Component } from 'react';

export default class CTA extends Component {

    

    render() {
        return (
            <div className="connect-cta-container">
                <div className="--inner">
                    <div className="--inner-inner">
                        <div className='cta-links-header row'>
                            <span className='col-sm-6'>connect socially</span>
                            <span className='col-sm-6'>stream music</span>
                        </div>

                        <div className="cta-links-container row">
                            <div className="--social-links col-sm-6">
                                <a target='_blank' rel='noopener noreferrer' className='fa-facebook' href="https://www.facebook.com/entrzelle"><span>facebook</span></a>
                                <a target='_blank' rel='noopener noreferrer' className='fa-twitter' href="https://www.twitter.com/entrzelle"><span>twitter</span></a>
                                <a target='_blank' rel='noopener noreferrer' className='fa-youtube' href="https://www.youtube.com/user/Entrzelle"><span>youtube</span></a>
                            </div>
                            <div className="--music-links col-sm-6">
                                <a target='_blank' rel='noopener noreferrer' className='fa-spotify' href="https://open.spotify.com/artist/7E07y9odlPu5zJcm8zjhkd"><span>spotify</span></a>
                                <a target='_blank' rel='noopener noreferrer' className='fa-reverbnation' href="https://www.reverbnation.com/entrzelle"><span>reverbnation</span></a>
                                <a target='_blank' rel='noopener noreferrer' className='fa-soundcloud' href="https://soundcloud.com/entrzelle"><span>soundcloud</span></a>
                            </div>
                            {/* 
                                    <div className="--label-links col-sm-4">
                                        <a href="https://alfamatrix.bandcamp.com/">alfamatrix-bandcamp</a>
                                        <a href="https://alfa-matrix-store.com/">alfamatrix-website-store</a>
                                        <a href="http://www.alfa-matrix.com/">alfamatrix-website-home</a>
                                    </div>
                                    */}
                        </div>

                        <div className="email-info-container">
                            <div className='cta-links-header row email-header'>
                                <span className='col-sm-12'>email me</span>
                            </div>

                            <div className="cta-email-container row email-content">
                                <div className="--email-directly col-sm-12">
                                    <a className='fa-email' href="mailto:entrzelle@gmail.com"><span style={{ display: 'none' }}>email me</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="label-info-container">

                            <div className='cta-links-header row label-header'>
                                <span className='col-sm-12'>label info</span>
                            </div>

                            <div className="cta-label-container row label-content">
                                <div className="--label col-sm-12">
                                    <a target='_blank' rel='noopener noreferrer' className='fa-label' href="https://alfa-matrix-store.com/"><span style={{ display: 'none' }}>label info</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}