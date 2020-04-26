import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';

import albumInfo from './_data/lyrics.js';

import { setContentContainerHeight } from '../assets/js/components/Content.js';

import '../assets/css/ContentComponent.scss';

import '../assets/css/lyrics.scss';

const strapi = new Strapi('http://localhost:1337');

export default class Lyrics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lyricsTPC: [],
            lyricsSTWOF: [],
            lyricsPOTM: []
        }
    }

    // albumInfo = {
    //         tpc: {
    //             albumTitle: 'Total Progressive Collapse',
    //             releaseInfo: '(2016)  -  LP / 2CD Box',
    //             label: 'Alfa Matrix',
    //             credits: 'All lyrics by David Chamberlin'
    //         },
    //         stwof: {
    //             albumTitle: 'Set These Walls On Fire',
    //             releaseInfo: '(2015)   -   EP',
    //             label: 'Alfa Matrix',
    //             credits: 'All lyrics by David Chamberlin'
    //         },
    //         potm: {
    //             albumTitle: 'Part Of The Movement - Bonus Tracks Version',
    //             releaseInfo: '(2015)   -   LP',
    //             label: 'Alfa Matrix',
    //             credits: 'All lyrics by David Chamberlin'
    //         }
            
    //     };

    async componentDidMount() {

        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);

        try {
            // fetch lyrics and sanitize content field
            const lyricsPosts = await strapi.getEntries('lyrics');
            lyricsPosts.forEach(p => {
                let dirty = p.content,
                    clean = DOMPurify.sanitize(dirty);
                p.content = clean;

            });
            // then, parse lyrics based on album
            // NOTE: this should be refactored
            const _lyricsTPC = [],
                  _lyricsSTWOF = [],
                  _lyricsPOTM = [];

            for (var i = 0; i < lyricsPosts.length; i++) {
                if (lyricsPosts[i].album === albumInfo.tpc.albumTitle) {
                    _lyricsTPC.push(lyricsPosts[i]);
                }
                if (lyricsPosts[i].album === albumInfo.stwof.albumTitle) {
                    _lyricsSTWOF.push(lyricsPosts[i]);
                }
                if (lyricsPosts[i].album === albumInfo.potm.albumTitle) {
                    _lyricsPOTM.push(lyricsPosts[i]);
                }
            }
            
            // set album info in class object variable
            // albumInfo.tpc = {
            //     'albumTitle': _lyricsTPC[0].album,
            //     'releaseInfo': _lyricsTPC[0].releaseInfo,
            //     'label': _lyricsTPC[0].label,
            //     'credits': _lyricsTPC[0].credits
            // };
            // albumInfo.stwof = {
            //     'albumTitle': _lyricsSTWOF[0].album,
            //     'releaseInfo': _lyricsSTWOF[0].releaseInfo,
            //     'label': _lyricsSTWOF[0].label,
            //     'credits': _lyricsSTWOF[0].credits
            // };
            // albumInfo.potm = {
            //     'albumTitle': _lyricsPOTM[0].album,
            //     'releaseInfo': _lyricsPOTM[0].releaseInfo,
            //     'label': _lyricsPOTM[0].label,
            //     'credits': _lyricsPOTM[0].credits
            // };

            this.setState({ 
                // lyrics: lyricsPosts,
                lyricsTPC: _lyricsTPC,
                lyricsSTWOF: _lyricsSTWOF,
                lyricsPOTM: _lyricsPOTM
            });

            // console.log(Array.isArray(this.state.lyrics));
            // console.log(Array.isArray(this.state.lyricsPOTM));
            // console.log(this.state.lyricsPOTM[0].album);
            console.log(albumInfo);

        }
        catch (err) {
            alert(err);
        }
    }

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">

                <div className="component-content-container--inner">

                        <div className="lyrics-content">


                            {/* TPC */}

                            {/* album info */}

                            <div className="content-title">
                                <h1>{albumInfo.tpc.albumTitle}</h1>
                                <div>
                                    <h6>{albumInfo.tpc.releaseInfo}</h6>
                                    <h6>{albumInfo.tpc.label}</h6>
                                </div>
                            </div>

                            {/* lyrics */}

                            {this.state.lyricsTPC.map(post =>

                                <div className="content-data">

                                    {/* note: dangerouslySetInnerHTML is safe here because HTML was previously sanitized by DOMPurify */}

                                    <div className="lyrics-detail" >
                                        <div className="lyrics-song">
                                            <h6>{post.song}</h6>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                    </div>



                                </div>
                            )} {/* tpc */}


                            {/* STWOF */}

                            {/* album info */}

                            <div className="content-title">
                                <h1>{albumInfo.stwof.albumTitle}</h1>
                                <div>
                                    <h6>{albumInfo.stwof.releaseInfo}</h6>
                                    <h6>{albumInfo.stwof.label}</h6>
                                </div>
                            </div>

                            {/* lyrics */}

                            {this.state.lyricsSTWOF.map(post =>

                                <div className="content-data">

                                    {/* note: dangerouslySetInnerHTML is safe here because HTML was previously sanitized by DOMPurify */}

                                    <div className="lyrics-detail" >
                                        <div className="lyrics-song">
                                            <h6>{post.song}</h6>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                    </div>

                                </div>
                            )} 
                                <div className="content-data">
                                    <div className="lyrics-detail" >
                                        <div>
                                            <div className="_content">
                                                <p><em>Lyrics to the following songs can be found in 'Total Progressive Collapse':</em></p>
                                            </div>
                                        </div>
                                        <div className="lyrics-song">
                                            <ul>
                                                <li><strong>Compatible With My Intoxication [sober]</strong></li>
                                                <li><strong>Bloodborn [utero]</strong></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="_content">
                                                <p><em>Lyrics to the following songs can be found in 'Part Of The Movement':</em></p>
                                            </div>
                                        </div>
                                        <div className="lyrics-song">
                                            <ul>
                                                <li><strong>Liar For Profit [arson]</strong></li>
                                                <li><strong>Pressure (Psy'Aviah)</strong></li>
                                                <li><strong>Fraud [burn]</strong></li>
                                                <li><strong>Rites Of Romance (Avarice In Audio)</strong></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div> {/* stwof */}



                            {/* POTM */}
                            
                            {/* album info */}
                            
                            <div className="content-title">
                                <h1>{albumInfo.potm.albumTitle}</h1>
                                <div>
                                    <h6>{albumInfo.potm.releaseInfo}</h6>
                                    <h6>{albumInfo.potm.label}</h6>
                                </div>
                            </div>
                            
                            {/* lyrics */}

                            {this.state.lyricsPOTM.map(post =>
                            
                                <div className="content-data">

                                    {/* note: dangerouslySetInnerHTML is safe here because HTML was previously sanitized by DOMPurify */}
                                    
                                    <div className="lyrics-detail" >
                                        <div className="lyrics-song">
                                            <h6>{post.song}</h6>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                    </div>



                                </div>
                            )} {/* potm */}



                        
                        
                        </div> 
                    







                </div>

            </div>
        )
    }
}