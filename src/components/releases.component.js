import React, { Component } from 'react';

import { setContentContainerHeight } from '../assets/js/components/Content.js';

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
                                    <p className="album-title"><em>{releaseData.studio.tpc.credits.title}</em></p>
                                    <p className="album-label">{releaseData.studio.tpc.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.additional_1}</em></p>
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.additional_2}</em></p>
                                    <p className="additional-credits"><em>{releaseData.studio.tpc.credits.additional_3}</em></p>
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
                                    <p className="album-title"><em>{releaseData.studio.stwof.credits.title}</em></p>
                                    <p className="album-label">{releaseData.studio.stwof.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.stwof.credits.additional_1}</em></p>
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
                                    <p className="album-title"><em>{releaseData.studio.potm.credits.title}</em></p>
                                    <p className="album-label">{releaseData.studio.potm.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.potm.credits.additional_1}</em></p>
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
                                    <p className="album-title"><em>{releaseData.studio.bs.credits.title}</em></p>
                                    <p className="album-label">{releaseData.studio.bs.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.bs.credits.additional_1}</em></p>
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
                                    <p className="album-title"><em>{releaseData.studio.potm_v1.credits.title}</em></p>
                                    <p className="album-label">{releaseData.studio.potm_v1.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.studio.potm_v1.credits.additional_1}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.md5.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.md5.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.md5.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.md4.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.md4.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.md4.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.ftb3.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.ftb3.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.ftb3.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.ftb2.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.ftb2.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.ftb2.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.eb7.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.eb7.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.eb7.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.sftm16.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.sftm16.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.sftm16.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.hic2.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.hic2.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.hic2.credits.featured_song}</em></p>
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
                                    <p className="album-title"><em>{releaseData.compilations.hic1.credits.title}</em></p>
                                    <p className="album-label">{releaseData.compilations.hic1.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{releaseData.compilations.hic1.credits.featured_song}</em></p>
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
                                    <p className="additional-credits"><em>{releaseData.remixesBy.sod.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesBy.sod.credits.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesBy.sod.credits.title}</em></p>
                                    <p className="album-label">{releaseData.remixesBy.sod.credits.label}</p>
                                    
                                    
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
                                    <p className="additional-credits"><em>{releaseData.remixesBy.gtl.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesBy.gtl.credits.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesBy.gtl.credits.title}</em></p>
                                    <p className="album-label">{releaseData.remixesBy.gtl.credits.label}</p>


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
                                    <p className="additional-credits"><em>{releaseData.remixesOf.pressure.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesOf.pressure.credits.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesOf.pressure.credits.title}</em></p>
                                    <p className="album-label">{releaseData.remixesOf.pressure.credits.label}</p>


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
                                    <p className="additional-credits"><em>{releaseData.remixesOf.ror.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{releaseData.remixesOf.ror.credits.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{releaseData.remixesOf.ror.credits.title}</em></p>
                                    <p className="album-label">{releaseData.remixesOf.ror.credits.label}</p>


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