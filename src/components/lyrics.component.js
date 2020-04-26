import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import DOMPurify from 'dompurify';

import releaseData from './_data/releases.js';

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
                if (lyricsPosts[i].album === releaseData.studio.tpc.title.short) {
                    _lyricsTPC.push(lyricsPosts[i]);
                }
                if (lyricsPosts[i].album === releaseData.studio.stwof.title.short) {
                    _lyricsSTWOF.push(lyricsPosts[i]);
                }
                if (lyricsPosts[i].album === releaseData.studio.potm.title.short) {
                    _lyricsPOTM.push(lyricsPosts[i]);
                }
            }
            
            // set album info in class object variable
            // releaseData.studio.tpc = {
            //     'title.short': _lyricsTPC[0].album,
            //     'releaseInfo': _lyricsTPC[0].releaseInfo,
            //     'label': _lyricsTPC[0].label,
            //     'credits': _lyricsTPC[0].credits
            // };
            // releaseData.studio.stwof = {
            //     'title.short': _lyricsSTWOF[0].album,
            //     'releaseInfo': _lyricsSTWOF[0].releaseInfo,
            //     'label': _lyricsSTWOF[0].label,
            //     'credits': _lyricsSTWOF[0].credits
            // };
            // releaseData.studio.potm = {
            //     'title.short': _lyricsPOTM[0].album,
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
            console.log(releaseData.studio);

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
                                <h1>{releaseData.studio.tpc.title.short}</h1>
                                <div>
                                    <h6>{releaseData.studio.tpc.releaseInfo}</h6>
                                    <h6>{releaseData.studio.tpc.label}</h6>
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
                                <h1>{releaseData.studio.stwof.title.short}</h1>
                                <div>
                                    <h6>{releaseData.studio.stwof.releaseInfo}</h6>
                                    <h6>{releaseData.studio.stwof.label}</h6>
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
                                <h1>{releaseData.studio.potm.title.short}</h1>
                                <div>
                                    <h6>{releaseData.studio.potm.releaseInfo}</h6>
                                    <h6>{releaseData.studio.potm.label}</h6>
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