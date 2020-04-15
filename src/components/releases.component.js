import React, { Component } from 'react';
import '../assets/css/releases.scss';
import '../assets/css/_content-component.scss';

import _coverTPC from '../assets/img/releases/TPC.jpg';
import _coverSTWOF from '../assets/img/releases/STWOF.jpg';
import _coverPOTM from '../assets/img/releases/POTM.jpg';
import _coverPOTM_v1 from '../assets/img/releases/POTM_v1.jpg';
import _coverBS from '../assets/img/releases/BS.jpg';

import _coverMD5 from '../assets/img/releases/MD5.jpg';
import _coverMD4 from '../assets/img/releases/MD4.jpg';
import _coverFTB3 from '../assets/img/releases/FTB3.jpg';
import _coverFTB2 from '../assets/img/releases/FTB2.jpg';
import _coverEB7 from '../assets/img/releases/EB7.jpg';
import _coverSFTM16 from '../assets/img/releases/SFTM16.jpg';
import _coverHIC2 from '../assets/img/releases/HIC2.jpg';
import _coverHIC1 from '../assets/img/releases/HIC1.jpg';

import _coverBC13_CK from '../assets/img/releases/BC13_CK.jpg';


export default class Releases extends Component {

    componentDidMount() {
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    // global non-updating class variables
    // studio releases
    studio = {
        tpc: {
            cover: _coverTPC,
            url: "https://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version?action=share&from=embed",
            alt: "Total Progressive Collapse - album",
            credits: {
                title: 'Total Progressive Collapse (2016)  -  LP / 2CD Box',
                label: 'Alfa Matrix',
                additional_1: 'all writing, performance, mixing by David Chamberlin',
                additional_2: 'mastering by Sebastian Komor',
                additional_3: 'artwork by Tomoki Hayasaka'
            }
        },
        stwof: {
            cover: _coverSTWOF,
            url: "https://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep?action=share&from=embed",
            alt: "Set These Walls On Fire - EP",
            credits: {
                title: 'Set These Walls On Fire (2015)   -   EP',
                label: 'Alfa Matrix',
                additional_1: 'all writing, performance, production, artwork by David Chamberlin'
            }
        },
        potm: {
            cover: _coverPOTM,
            url: "https://alfamatrix.bandcamp.com/album/part-of-the-movement-bonus-tracks-version",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/part-of-the-movement-bonus-tracks-version?action=share&from=embed",
            alt: "Part Of The Movement - album",
            credits: {
                title: 'Part Of The Movement - Bonus Tracks Version (2015)   -   LP',
                label: 'Alfa Matrix',
                additional_1: 'all writing, performance, production, artwork by David Chamberlin'
            }
        },
        potm_v1: {
            cover: _coverPOTM_v1,
            alt: "Part Of The Movement v1 - self-released album",
            credits: {
                title: 'Part Of The Movement - original version (2012)   -   LP',
                label: 'Entrzelle Music',
                additional_1: 'all writing, performance, production, artwork by David Chamberlin'
            }
        },
        bs: {
            cover: _coverBS,
            alt: "Biotic Shift - self-released EP",
            credits: {
                title: 'Biotic Shift (2013)   -   EP',
                label: 'Entrzelle Music',
                additional_1: 'all writing, performance, production, artwork by David Chamberlin'
            }
        }
    }

    compilations = {
        md5: {
            cover: _coverMD5,
            url: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-005",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-005?action=share&from=embed",
            alt: "Matrix Downloaded, 005 - compilation",
            credits: {
                title: 'Matrix Downloaded, 005 (2015)',
                label: 'Alfa Matrix',
                featured_song: '"Liar For Profit [arson]"'
            }
        },
        md4: {
            cover: _coverMD4,
            url: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-004",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-004?action=share&from=embed",
            alt: "Matrix Downloaded, 004 - compilation",
            credits: {
                title: 'Matrix Downloaded, 004 (2015)',
                label: 'Alfa Matrix',
                featured_song: '"Compatible With My Intoxication [radio edit]"'
            }
        },
        ftb3: {
            cover: _coverFTB3,
            url: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-3",
            _shareUrl: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-3?action=share&from=embed",
            alt: "Face The Beat, Session 3 - compilation",
            credits: {
                title: 'Face The Beat, Session 3 (2015)',
                label: 'Side-Line Magazine',
                featured_song: '"Liar For Profit [arson]"'
            }
        },
        ftb2: {
            cover: _coverFTB2,
            url: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-2",
            _shareUrl: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-2?action=share&from=embed",
            alt: "Face The Beat, Session 2 - compilation",
            credits: {
                title: 'Face The Beat, Session 2 (2015)',
                label: 'Side-Line Magazine',
                featured_song: '"Compatible With My Intoxication [radio edit]"'
            }
        },
        eb7: {
            cover: _coverEB7,
            url: "https://www.outoflineshop.de/endzeit-bunkertracks-vol-7.html",
            alt: "Endzeit Bunkertracks, act VII - compilation",
            credits: {
                title: 'Endzeit Bunkertracks, act VII (2015)',
                label: 'Out Of Line Music',
                featured_song: '"Power Play [assault]"'
            }
        },
        sftm16: {
            cover: _coverSFTM16,
            url: "http://alfamatrix.bandcamp.com/album/sounds-from-the-matrix-16",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/sounds-from-the-matrix-16?action=share&from=embed",
            alt: "Sounds From The Matrix, vol. 16 - compilation",
            credits: {
                title: 'Sounds From The Matrix, vol. 16 (2015)',
                label: 'Alfa Matrix',
                featured_song: '"Compatible With My Intoxication [radio edit]"'
            }
        },
        hic2: {
            cover: _coverHIC2,
            url: "https://itunes.apple.com/us/album/hell...-its-christmas...-again/id589695268",
            alt: "Hell, It's Christmas...Again - compilation",
            credits: {
                title: "Hell, It's Christmas...Again (2012)",
                label: 'Hollywood RX Records',
                featured_song: '"White Christmas"'
            }
        },
        hic1: {
            cover: _coverHIC1,
            url: "https://itunes.apple.com/us/album/hell...its-christmas-ep/id488370290",
            alt: "Hell, It's Christmas... - compilation",
            credits: {
                title: "Hell...It's Christmas (2011)",
                label: 'Hollywood RX Records',
                featured_song: '"The Most Wonderful Time Of The Year"'
            }
        },
    }

    remixesBy = {
        sod: {
            cover: _coverMD4,
            url: "https://alfamatrix.bandcamp.com/track/a-sea-of-distance-entrzelle-mix",
            _shareUrl: "https://alfamatrix.bandcamp.com/track/a-sea-of-distance-entrzelle-mix?action=share&from=embed",
            alt: "Mondtraume - Sea Of Distance (Entrzelle remix)",
            credits: {
                title: 'Matrix Downloaded, 004 (2015)',
                label: 'Alfa Matrix',
                featured_song: '"Sea Of Distance"',
                original_artist: "Mondträume"
            }
        },
        gtl: {
            cover: _coverBC13_CK,
            url: "https://itunes.apple.com/us/album/cyberkraft/id518318223",
            alt: "BioCarbon13 - Good To Live (Entrzelle remix)",
            credits: {
                title: 'Cyberkraft (2012) - LP',
                label: 'BioCarbon13',
                featured_song: '"Good To Live"',
                original_artist: "BioCarbon13"
            }
        },
    }

    remixesOf = {
        pressure: {
            cover: _coverSTWOF,
            url: "http://alfamatrix.bandcamp.com/track/pressure-psy-aviah-remix",
            _shareUrl: "http://alfamatrix.bandcamp.com/track/pressure-psy-aviah-remix?action=share&from=embed",
            alt: "Entrzelle - Pressure (Psy'Aviah remix)",
            credits: {
                title: 'Set These Walls On Fire (2015) - EP',
                label: 'Alfa Matrix',
                featured_song: '"Pressure"',
                remix_artist: "Psy'Aviah"
            }
        },
        ror: {
            cover: _coverSTWOF,
            url: "http://alfamatrix.bandcamp.com/track/rites-of-romance-avarice-in-audio-remix",
            _shareUrl: "http://alfamatrix.bandcamp.com/track/rites-of-romance-avarice-in-audio-remix?action=share&from=embed",
            alt: "Entrzelle - Rites Of Romance (Avarice In Audio remix)",
            credits: {
                title: 'Set These Walls On Fire (2015) - EP',
                label: 'Alfa Matrix',
                featured_song: '"Rites Of Romance"',
                remix_artist: "Avarice In Audio"
            }
        },
        
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
        // audioCol.style.height = window.innerHeight - contentTop + 'px';
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
                                    <a href={this.studio.tpc.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.studio.tpc.cover} alt={this.studio.tpc.alt}/>
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.studio.tpc.credits.title}</em></p>
                                    <p className="album-label">{this.studio.tpc.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.studio.tpc.credits.additional_1}</em></p>
                                    <p className="additional-credits"><em>{this.studio.tpc.credits.additional_2}</em></p>
                                    <p className="additional-credits"><em>{this.studio.tpc.credits.additional_3}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.studio.tpc.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.studio.tpc._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* STWOF */}

                            <div id="album-SWTOF" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.studio.stwof.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.studio.stwof.cover} alt={this.studio.stwof.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.studio.stwof.credits.title}</em></p>
                                    <p className="album-label">{this.studio.stwof.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.studio.stwof.credits.additional_1}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.studio.stwof.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.studio.stwof._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* POTM */}

                            <div id="album-POTM" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.studio.potm.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.studio.potm.cover} alt={this.studio.potm.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.studio.potm.credits.title}</em></p>
                                    <p className="album-label">{this.studio.potm.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.studio.potm.credits.additional_1}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.studio.potm.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.studio.potm._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* BS */}

                            <div id="album-BS" className="album-detail">
                                <div className="album-cover">
                                    <a href="#album-BS">
                                        <img src={this.studio.bs.cover} alt={this.studio.bs.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.studio.bs.credits.title}</em></p>
                                    <p className="album-label">{this.studio.bs.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.studio.bs.credits.additional_1}</em></p>
                                </div>

                            </div>

                            {/* POTM v1 */}

                            <div id="album-POTM_v1" className="album-detail">
                                <div className="album-cover">
                                    <a href="#album-POTM_v1">
                                        <img src={this.studio.potm_v1.cover} alt={this.studio.potm_v1.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.studio.potm_v1.credits.title}</em></p>
                                    <p className="album-label">{this.studio.potm_v1.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.studio.potm_v1.credits.additional_1}</em></p>
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
                                    <a href={this.compilations.md5.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.md5.cover} alt={this.compilations.md5.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.md5.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.md5.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.md5.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.md5.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.compilations.md5._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* MD4 */}

                            <div id="album-MD4" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.md4.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.md4.cover} alt={this.compilations.md4.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.md4.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.md4.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.md4.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.md4.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.compilations.md4._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* FTB3 */}

                            <div id="album-FTB3" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.ftb3.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.ftb3.cover} alt={this.compilations.ftb3.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.ftb3.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.ftb3.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.ftb3.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.ftb3.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.compilations.ftb3._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* FTB2 */}

                            <div id="album-FTB2" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.ftb2.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.ftb2.cover} alt={this.compilations.ftb2.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.ftb2.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.ftb2.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.ftb2.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.ftb2.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.compilations.ftb2._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* EB7 */}

                            <div id="album-EB7" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.eb7.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.eb7.cover} alt={this.compilations.eb7.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.eb7.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.eb7.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.eb7.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.eb7.url}>Buy</a>
                                    </div>
                                </div>

                            </div>

                            {/* SFTM16 */}

                            <div id="album-SFTM16" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.sftm16.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.sftm16.cover} alt={this.compilations.sftm16.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.sftm16.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.sftm16.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.sftm16.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.sftm16.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.compilations.sftm16._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* HIC2 */}

                            <div id="album-HIC2" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.hic2.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.hic2.cover} alt={this.compilations.hic2.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.hic2.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.hic2.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.hic2.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.hic2.url}>Buy</a>
                                    </div>
                                </div>

                            </div>

                            {/* HIC1 */}

                            <div id="album-HIC1" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.compilations.hic1.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.compilations.hic1.cover} alt={this.compilations.hic1.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{this.compilations.hic1.credits.title}</em></p>
                                    <p className="album-label">{this.compilations.hic1.credits.label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{this.compilations.hic1.credits.featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.compilations.hic1.url}>Buy</a>
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
                                    <a href={this.remixesBy.sod.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.remixesBy.sod.cover} alt={this.remixesBy.sod.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{this.remixesBy.sod.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{this.remixesBy.sod.credits.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{this.remixesBy.sod.credits.title}</em></p>
                                    <p className="album-label">{this.remixesBy.sod.credits.label}</p>
                                    
                                    
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.remixesBy.sod.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.remixesBy.sod._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* GTL */}

                            <div id="remix-GTL" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.remixesBy.gtl.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.remixesBy.gtl.cover} alt={this.remixesBy.gtl.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{this.remixesBy.gtl.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{this.remixesBy.gtl.credits.original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{this.remixesBy.gtl.credits.title}</em></p>
                                    <p className="album-label">{this.remixesBy.gtl.credits.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.remixesBy.gtl.url}>Buy</a>

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
                                    <a href={this.remixesOf.pressure.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.remixesOf.pressure.cover} alt={this.remixesOf.pressure.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{this.remixesOf.pressure.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{this.remixesOf.pressure.credits.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{this.remixesOf.pressure.credits.title}</em></p>
                                    <p className="album-label">{this.remixesOf.pressure.credits.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.remixesOf.pressure.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.remixesOf.pressure._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            {/* ROR */}

                            <div id="remix-ROR" className="album-detail">
                                <div className="album-cover">
                                    <a href={this.remixesOf.ror.url} target="_blank" rel="noopener noreferrer">
                                        <img src={this.remixesOf.ror.cover} alt={this.remixesOf.ror.alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{this.remixesOf.ror.credits.featured_song}</em></p>
                                    <p className="additional-credits"><em>{this.remixesOf.ror.credits.remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{this.remixesOf.ror.credits.title}</em></p>
                                    <p className="album-label">{this.remixesOf.ror.credits.label}</p>


                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={this.remixesOf.ror.url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={this.remixesOf.ror._shareUrl}>Share</a>
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