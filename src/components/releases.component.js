import React, { Component } from 'react';

import { setContentContainerHeight } from '../assets/js/components/Content.js';

// import releaseData from './_data/releases.js';

import releaseData from './_data/releases.js';

import '../assets/css/ContentComponent.scss';
import '../assets/css/releases.scss';

export default class Releases extends Component {

    componentDidMount() {
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);
    }

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
                <div className="component-content-container--inner">

                    {/* STUDIO */}

                    <div id="studio">

                        <div className="content-title">
                            <h1>Studio Releases</h1>
                        </div>

                        <div className="content-data">

                            {/* TPC */}

                            <div id="album-TPC" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.studio.tpc.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.studio.tpc.cover} alt={releaseData.studio.tpc.alt}/>
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.studio.tpc.title.long}</em></p>
                                    <p className="album-label">{releaseData.studio.tpc.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.production[0]}</em></p>
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.production[1]}</em></p>
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.production[2]}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.studio.tpc.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.studio.tpc._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* STWOF */}

                            <div id="album-SWTOF" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.studio.stwof.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.studio.stwof.cover} alt={releaseData.studio.stwof.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.studio.stwof.title.long}</em></p>
                                    <p className="album-label">{releaseData.studio.stwof.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.stwof.credits.production[0]}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.studio.stwof.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.studio.stwof._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* POTM */}

                            <div id="album-POTM" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.studio.potm.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.studio.potm.cover} alt={releaseData.studio.potm.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.studio.potm.title.long}</em></p>
                                    <p className="album-label">{releaseData.studio.potm.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.potm.credits.production[0]}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.studio.potm.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.studio.potm._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* BS */}

                            <div id="album-BS" className="album-detail">
                                <div className="album-cover">
                                    <a href="#album-BS">
                                        <img src={releaseData.studio.bs.cover} alt={releaseData.studio.bs.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.studio.bs.title.long}</em></p>
                                    <p className="album-label">{releaseData.studio.bs.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.bs.credits.production[0]}</em></p>
                                </div>

                            </div>

                            {/* POTM v1 */}

                            <div id="album-POTM_v1" className="album-detail">
                                <div className="album-cover">
                                    <a href="#album-POTM_v1">
                                        <img src={releaseData.studio.potm_v1.cover} alt={releaseData.studio.potm_v1.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.studio.potm_v1.title.long}</em></p>
                                    <p className="album-label">{releaseData.studio.potm_v1.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.potm_v1.credits.production[0]}</em></p>
                                </div>

                            </div>




                        </div>

                    </div> {/* / releases--studio */}


                    {/* COMPILATIONS */}

                    <div id="compilations">

                        <div className="content-title">
                            <h1>Compilations</h1>
                        </div>

                        <div className="content-data">

                            {/* MD5 */}

                            <div id="album-MD5" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.md5.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.md5.cover} alt={releaseData.compilations.md5.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.md5.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.md5.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.md5.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.md5.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.md5._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* MD4 */}

                            <div id="album-MD4" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.md4.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.md4.cover} alt={releaseData.compilations.md4.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.md4.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.md4.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.md4.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.md4.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.md4._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* FTB3 */}

                            <div id="album-FTB3" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.ftb3.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.ftb3.cover} alt={releaseData.compilations.ftb3.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.ftb3.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.ftb3.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.ftb3.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.ftb3.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.ftb3._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* FTB2 */}

                            <div id="album-FTB2" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.ftb2.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.ftb2.cover} alt={releaseData.compilations.ftb2.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.ftb2.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.ftb2.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.ftb2.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.ftb2.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.ftb2._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* EB7 */}

                            <div id="album-EB7" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.eb7.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.eb7.cover} alt={releaseData.compilations.eb7.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.eb7.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.eb7.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.eb7.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.eb7.url}>Buy</a>
                                    </div>
                                </div>

                            </div>

                            {/* SFTM16 */}

                            <div id="album-SFTM16" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.sftm16.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.sftm16.cover} alt={releaseData.compilations.sftm16.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.sftm16.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.sftm16.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.sftm16.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.sftm16.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.sftm16._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* HIC2 */}

                            <div id="album-HIC2" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.hic2.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.hic2.cover} alt={releaseData.compilations.hic2.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.hic2.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.hic2.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.hic2.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.hic2.url}>Buy</a>
                                    </div>
                                </div>

                            </div>

                            {/* HIC1 */}

                            <div id="album-HIC1" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.compilations.hic1.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.compilations.hic1.cover} alt={releaseData.compilations.hic1.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{releaseData.compilations.hic1.title.long}</em></p>
                                    <p className="album-label">{releaseData.compilations.hic1.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.hic1.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.compilations.hic1.url}>Buy</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div> {/* / releases--compilations */}


                    {/* REMIXES BY */}

                    <div id="remixes-by">

                        <div className="content-title">
                            <h1>Remixes By Entrzelle</h1>
                        </div>

                        <div className="content-data">

                            {/* SOD */}

                            <div id="remix-SOD" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.remixesBy.sod.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.remixesBy.sod.cover} alt={releaseData.remixesBy.sod.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{releaseData.remixesBy.sod.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesBy.sod.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesBy.sod.title.long}</em></p>
                                    <p className="album-label">{releaseData.remixesBy.sod.label}</p>
                                    
                                    
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.remixesBy.sod.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.remixesBy.sod._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* GTL */}

                            <div id="remix-GTL" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.remixesBy.gtl.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.remixesBy.gtl.cover} alt={releaseData.remixesBy.gtl.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{releaseData.remixesBy.gtl.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesBy.gtl.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesBy.gtl.title.long}</em></p>
                                    <p className="album-label">{releaseData.remixesBy.gtl.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.remixesBy.gtl.url}>Buy</a>

                                    </div>
                                </div>

                            </div>

                            
                        </div>

                    </div> {/* / releases--remixes-by */}


                    {/* REMIXES OF */}

                    <div id="remixes-of">

                        <div className="content-title">
                            <h1>Remixes Of Entrzelle</h1>
                        </div>

                        <div className="content-data">

                            {/* Pressure */}

                            <div id="remix-Pressure" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.remixesOf.pressure.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.remixesOf.pressure.cover} alt={releaseData.remixesOf.pressure.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{releaseData.remixesOf.pressure.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesOf.pressure.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesOf.pressure.title.long}</em></p>
                                    <p className="album-label">{releaseData.remixesOf.pressure.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.remixesOf.pressure.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.remixesOf.pressure._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* ROR */}

                            <div id="remix-ROR" className="album-detail">
                                <div className="album-cover">
                                    <a href={releaseData.remixesOf.ror.url} target="_blank" rel="noopener noreferrer">
                                        <img src={releaseData.remixesOf.ror.cover} alt={releaseData.remixesOf.ror.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{releaseData.remixesOf.ror.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesOf.ror.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesOf.ror.title.long}</em></p>
                                    <p className="album-label">{releaseData.remixesOf.ror.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={releaseData.remixesOf.ror.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={releaseData.remixesOf.ror._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            


                        </div>

                    </div> {/* / releases--remixes-of */}

                    
                </div> {/* / container inner */}

              
            </div>
        )
    }
}