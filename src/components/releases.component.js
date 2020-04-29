import React, { Component } from 'react';

import { setContentContainerHeight, setPageTitle } from '../assets/js/components/Content.js';
import releaseData from './_data/releases.js';

import '../assets/css/ContentComponent.scss';
import '../assets/css/releases.scss';

export default class Releases extends Component {

    constructor(props){

        super(props);

        // first thing: convert release object(s) to map, then to array
        //  necessary to interate for dynamic html rendering
        var studioArray = Array.from(new Map(Object.entries(releaseData.studio))),
            compilationsArray = Array.from(new Map(Object.entries(releaseData.compilations))),
            remixesByArray = Array.from(new Map(Object.entries(releaseData.remixesBy))),
            remixesOfArray = Array.from(new Map(Object.entries(releaseData.remixesOf)));

        this.state = {
            studio: studioArray,
            compilations: compilationsArray,
            remixesBy: remixesByArray,
            remixesOf: remixesOfArray
        }
    }

    componentDidMount() {

        setPageTitle('Releases');
        
        setContentContainerHeight();
        window.addEventListener('resize', setContentContainerHeight);

    }

    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
                <div className="component-content-container--inner">

                    <div id="studio">

                        <div className="content-title">
                            <h1>Studio Releases</h1>
                        </div>

                        <div className="content-data">

                            {/* NOTE: using ternary expression to account for missing 'url' (and resulting '_shareUrl') -- if album is unavailable to buy, also unavailable to share */}

                            {this.state.studio.map(release => 

                            release[1].url ?

                            (<div key={release[1].id} id={release[1].id} className='album-detail'>
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title">
                                        <em>{release[1].title.long}</em>
                                    </p>
                                    <p className="album-label">
                                        {release[1].label}
                                    </p>
                                    <br />
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[0]}</em>
                                    </p>
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[1]}</em>
                                    </p>
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[2]}</em>
                                    </p>
                                </div>
                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={release[1]._shareUrl}>Share</a>
                                    </div>
                                </div>
                            </div>)
                            :
                            (<div key={release[1].id} id={release[1].id} className='album-detail'>
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title">
                                        <em>{release[1].title.long}</em>
                                    </p>
                                    <p className="album-label">
                                        {release[1].label}
                                    </p>
                                    <br />
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[0]}</em>
                                    </p>
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[1]}</em>
                                    </p>
                                    <p className="additional-credits">
                                        <em>{release[1].credits.production[2]}</em>
                                    </p>
                                </div>
                            </div>)

                            )}

                        </div> {/* / content-data */}

                    </div> {/* / releases--studio */}

                    <div id="compilations">

                        <div className="content-title">
                            <h1>Compilations</h1>
                        </div>

                        <div className="content-data">

                            {/* NOTE: using ternary expression to account for missing _shareUrl' */}

                            {this.state.compilations.map(release => 
                                
                            release[1]._shareUrl ?
                            
                            (<div key={release[1].id} id={release[1].id} className="album-detail">
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{release[1].title.long}</em></p>
                                    <p className="album-label">{release[1].label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{release[1].featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={release[1]._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>) 
                            : 
                            (<div key={release[1].id} id={release[1].id} className="album-detail">
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="album-title"><em>{release[1].title.long}</em></p>
                                    <p className="album-label">{release[1].label}</p>
                                    <br />
                                    <p className="additional-credits"><em>{release[1].featured_song}</em></p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                    </div>
                                </div>

                            </div>) 
                                
                            )}

                        </div> {/* / content-data */}

                    </div> {/* / releases--compilations */}

                    <div id="remixes-by">

                        <div className="content-title">
                            <h1>Remixes By Entrzelle</h1>
                        </div>

                        <div className="content-data">

                            {/* NOTE: using ternary expression to account for missing _shareUrl' */}

                            {this.state.remixesBy.map(release => 
                            
                            release[1]._shareUrl ?

                            (<div key={release[1].id} id={release[1].id} className="album-detail">
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{release[1].featured_song}</em></p>
                                    <p className="additional-credits"><em>{release[1].original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{release[1].title.long}</em></p>
                                    <p className="album-label">{release[1].label}</p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={release[1]._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>)
                            :
                            (<div key={release[1].id} id={release[1].id} className="album-detail">
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{release[1].featured_song}</em></p>
                                    <p className="additional-credits"><em>{release[1].original_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{release[1].title.long}</em></p>
                                    <p className="album-label">{release[1].label}</p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                    </div>
                                </div>

                            </div>)

                            )}
                            
                        </div>

                    </div> {/* / releases--remixes-by */}

                    <div id="remixes-of">

                        <div className="content-title">
                            <h1>Remixes Of Entrzelle</h1>
                        </div>

                        <div className="content-data">

                            {/* NOTE: no need for ternary expression -- all values exist */}

                            {this.state.remixesOf.map(release =>

                            <div key={release[1].id} id={release[1].id} className="album-detail">
                                <div className="album-cover">
                                    <a href={release[1].url} target="_blank" rel="noopener noreferrer">
                                        <img src={release[1].cover} alt={release[1].alt} />
                                    </a>
                                </div>
                                <div className="album-credits">
                                    <p className="additional-credits"><em>{release[1].featured_song}</em></p>
                                    <p className="additional-credits"><em>{release[1].remix_artist}</em></p>
                                    <br />
                                    <p className="album-title"><em>{release[1].title.long}</em></p>
                                    <p className="album-label">{release[1].label}</p>
                                </div>

                                <div className="album-cta">
                                    <div className="cta-buttons">
                                        <a className="cta-buy" target="_blank" rel="noopener noreferrer" href={release[1].url}>Buy</a>
                                        <a className="cta-share" target="_blank" rel="noopener noreferrer" href={release[1]._shareUrl}>Share</a>
                                    </div>
                                </div>

                            </div>

                            )}

                        </div> {/* / content-data */}

                    </div> {/* / releases--remixes-of */}

                </div> {/* / container inner */}

            </div>
        )
    }
}