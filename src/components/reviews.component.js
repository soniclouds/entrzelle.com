import React, { Component } from 'react';
 
import '../assets/css/reviews.scss';
import '../assets/css/_content-component.scss';

import _coverTPC from '../assets/img/releases/TPC.jpg';
import _coverPOTM from '../assets/img/releases/POTM.jpg';
import _coverSTWOF from '../assets/img/releases/STWOF.jpg';

export default class Reviews extends Component {
 

    componentDidMount() {
        this.setSideColumnHeight();
        window.addEventListener('resize', this.setSideColumnHeight);
    }

    setSideColumnHeight() {
        let contentTop = document.getElementById('ccc-outer').offsetTop,
            contentContainer = document.getElementById('ccc-outer');

        contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';
    }


    tpc = {
        title: "Total Progressive Collapse",
        alt: "Total Progressive Collapse - album reviews",
        img: _coverTPC,
        label: "Alfa Matrix",
        releaseInfo: "released April 15, 2016 - 2CD LP",
        reviews: {
            sideLineMag: {
                publication: "Side-Line Music Magazine",
                date: "June 18 2016",
                link: "https://www.facebook.com/InfernoSoundDiaries/photos/a.1515526255393544.1073741826.1515526178726885/1777622549183912/?type=3",
                
            }
        }
    }

    potm = {
        title: "Part Of The Movement (Bonus Tracks Version)",
        alt: "Part Of The Movement - album reviews",
        img: _coverPOTM,
        label: "Alfa Matrix",
        releaseInfo: "released June 19, 2015 - digital LP",
        reviews: {
            sideLineMag: {
                publication: "Side-Line Music Magazine",
                date: "August 6 2015",
                link: "http://www.side-line.com/entrzelle-part-of-the-movement-bonus-tracks-version-digital-album-alfa-matrix/",
                
            }
        }
    }

    stwof = {
        title: "Set These Walls On Fire",
        alt: "Set These Walls On Fire - album reviews",
        img: _coverSTWOF,
        label: "Alfa Matrix",
        releaseInfo: "released June 19, 2015 - digital EP",
        reviews: {
            sideLineMag: {
                publication: "Side-Line Music Magazine",
                date: "August 5 2015",
                link: "http://www.side-line.com/entrzelle-set-these-walls-on-fire-digital-ep-alfa-matrix/",

            }
        }
    }


    render() {
        return (
            <div id="ccc-outer" className="component-content-container--outer">
              
                <div className="component-content-container--inner">

                    <div className="reviews-content">

                        {/* TPC */}

                        <div className="content-title">
                            <img src={this.tpc.img} alt={this.tpc.alt}/>
                            <div className="title-description">
                                <h1>{this.tpc.title}</h1>
                                <p>{this.tpc.releaseInfo}</p>
                                <p>{this.tpc.label}</p>
                            </div>
                        </div>

                        <div className="content-data">

                            {/* SideLine */}

                            <div id="review-TPC--SideLineMagazine" className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {this.tpc.reviews.sideLineMag.publication}
                                    </h2>
                                    <p className="review-date">
                                        {this.tpc.reviews.sideLineMag.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={this.tpc.reviews.sideLineMag.link}>
                                            original article
                                        </a>
                                    </p>
                                    <p className="review-content">
                                        <p>Genre/Influences: Glitch-pop, future-pop.</p>
                                        <p>Background/Info: David Chamberlin and his sonic brainchild (cf. Entrzelle) last year joined the Alfa Matrix roster unleashing the EP “Set These Walls On Fire". One year later the new album (Entzelle already released a debut full length “Part Of The Movement” in 2012 and got re-released on Alfa Matrix a few months ago now) is a fact, being for sure a consecration for this American artist.</p>
                                        <p>Content: The sound of Entrzelle clearly finds its inspiration in some pop fields, but it has been adapted into a sophisticated and intelligent composition. Some icy, evasive elements remind me now and then to Haujobb. It’s a kind of fusion between glitch-pop (for the complexity and experimental touch) and future-pop (for the carrying leads). The sound is not exactly the most accessible one, but definitely appeals for lovers of sound manipulations and great arrangements.</p>
                                        <p>The arrangements are a quite noticeable and essential aspect of the work. Chamberlin moves in between sensitive and refined piano-like arrangements and harder, epic-minded arrangements. It all depends from the kind of song and the global mood hanging over it. The songs are carried by danceable vibes and are even moving into a brilliant trance-minded apotheosis.</p>
                                        <p>I wasn’t that enthusiast about some vocal parts on the previous album, but I have to admit this is an element that has been seriously improved.</p>
                                        <p>The bonus disc of the limited edition features a few extra songs plus remixes. Some cuts have been boosted into potential club mixes and I here have to mention the great contribution from bands like Avarice In Audio,Venal Flesh and Cutoff:Sky.</p>
                                        <p>+ + + : This album stands for intelligent electronics resulting from the mix of pop elements and a very personal and complex approach. This work is the imaginary hybrid between the cold and atmospheric work of Haujobb and the sound chemistry of Seb Komor.</p>
                                        <p>- - - : The complexity of the production is not always the most accessible one. Entrzelle doesn’t really belong to an established and stereotypical music genre so it will be not be easy to achieve a wider recognition. It all sounds like a big challenge to catch a wider audience.</p>
                                        <p><strong>Conclusion</strong>: “Total Progressive Collapse” is an interesting challenge and a view upon possible further electro-pop standards.</p>
                                        <p><strong>Best songs</strong>: “Outlive”, “Insider”, “Ozone”, “Total Progressive Collapse” + “Stormchaser - Dreamix By Avarice In Audio”, “Stormchaser - Cutoff:sky Remix”, “Outlive – Venal Flesh remix”, “Power Play – Assault”.</p>
                                        <p><strong>Rate</strong>: (7½).</p>
                                        <p><strong>Band</strong>: https://entrzelle.com / www.facebook.com/entrzelle</p>
                                        <p><strong>Label</strong>: www.alfa-matrix.com / www.facebook.com/Alfa.Matrix</p>
                                    </p>
                                </div>

                                

                            </div>


                            

                            




                        </div>

                        {/* POTM */}

                        <div className="content-title">
                            <img src={this.potm.img} alt={this.potm.alt} />
                            <div className="title-description">
                                <h1>{this.potm.title}</h1>
                                <p>{this.potm.releaseInfo}</p>
                                <p>{this.potm.label}</p>
                            </div>
                        </div>

                        <div className="content-data">

                            {/* SideLine */}

                            <div id="review-POTM--SideLineMagazine" className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {this.potm.reviews.sideLineMag.publication}
                                    </h2>
                                    <p className="review-date">
                                        {this.potm.reviews.sideLineMag.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={this.potm.reviews.sideLineMag.link}>
                                            original article
                                        </a>
                                    </p>
                                    <p className="review-content">
                                        <p>Next to the new EP “Set These Walls On Fire” Alfa-Matrix and Entrzelle also unleashed a revisited version of their self-released debut-CD “Part Of The Movement” (2012). This new version features original 13 songs plus 6 extra tracks.</p>
                                        <p>It’s an interesting way to discover Entrzelle, which I discovered on the latest “Endzeit Bunkertracks”-series. They claim to compose ‘explosive cinematic industrial’ music, which is an interesting term to analyze. I don’t experience their sound as totally ‘explosive’, but probably more ‘cinematic’ while we can speak about ‘industrial’ (quite commonly used in the USA) when noticing the raw sound treatments.</p>
                                        <p>Sound-wise Entrzelle is a great band for being freaky sound creators reminding me of legendary artists like Haujobb and Seb Komor. There’s a nice fusion between a kind of astral pop sound and raw sonic manipulations. It’s always complex and sometimes moving on the edge of IDM. Entrzelle sounds unique in their genre and this ‘genre’ is pretty diversified. Some elements running through “Come Through” remind me a bit of future-pop. “Waste” is one of the most noticeable cuts for a truly Norwegian sound-touch. I’d swear that I was hearing pupils of Seb Komor composing this song. A few technoid arrangements can be heard on “Dawn” while the Haujobb fans will be interested to discover “Pressure”.</p>
                                        <p>There definitely is a lot to discover on this album although I’m not always convinced about the coherence between the songs. I got the impression of being in front of impressive walls of a castle without cement. I’m missing a climax on most of the songs while the production of the vocals can’t fully convince me. There for sure is a lot of passion and emotion emerging from the vocals, but the sound and vocals don’t always match.</p>
                                        <p>Among the ‘bonus’ songs we get two previously unreleased songs plus some remixes. Among both new songs I especially like “Keep The Bastards Poor”. This is the best Entrzelle song I’ve heard so far. It’s harder and definitely somewhere in between pop- and industrial music. It’s a divine experiment and I also prefer the vocals here, which sound like spoken samples.</p>
                                        <p>The other songs originally appeared at the self-released EP “Bionic Shift” (2013) while you’ll hear the ‘album’-mixes on “Part Of The Movement”-CD. The remixes sound a little bit harder while some symphonic arrangements can be heard now and then. My personal favorite is the song “Come Through – Violate”. I also prefer the vocals on the remixes instead of the album-versions.</p>
                                        <p><strong>Conclusion</strong>: If you’re in search of an ‘industrial’ alternative to common electro-pop standards, Entrzelle is definitely something for you!</p>
                                        <p><strong>Best songs</strong>: “Keep The Bastards Poor”, “Dawn”, “All Too Close”, “Come Through – Violate”, “Dawn – Satellite”.</p>
                                        <p><strong>Rate</strong>: (DP:7)DP.</p>
                                        <p><strong>Band</strong>: www.entrzelle.com / www.facebook.com/entrzelle</p>
                                        <p><strong>Label</strong>: www.alfa-matrix.com / www.facebook.com/Alfa.Matrix</p>
                                    </p>
                                </div>



                            </div>









                        </div>

                        {/* STWOF */}

                        <div className="content-title">
                            <img src={this.stwof.img} alt={this.stwof.alt} />
                            <div className="title-description">
                                <h1>{this.stwof.title}</h1>
                                <p>{this.stwof.releaseInfo}</p>
                                <p>{this.stwof.label}</p>
                            </div>
                        </div>

                        <div className="content-data">

                            {/* SideLine */}

                            <div id="review-STWOF--SideLineMagazine" className="review-detail">
                                <div className="">
                                    <h2 className="review-publication">
                                        {this.stwof.reviews.sideLineMag.publication}
                                    </h2>
                                    <p className="review-date">
                                        {this.stwof.reviews.sideLineMag.date}
                                    </p>
                                    <p className="review-link">
                                        <a target="_blank" rel="noopener noreferrer" href={this.stwof.reviews.sideLineMag.link}>
                                            original article
                                        </a>
                                    </p>
                                    <p className="review-content">
                                        <p>Entrzelle is one of the newest signings to the Alfa-Matrix roster. This band operating from Los Angeles (USA) was set up by David Chamberlin and Malice Vext. They define their music as ‘explosive cinematic industrial’, which I think must be a new label.</p>
                                        <p>Entrzelle self-released a few productions before joining hands together with Alfa-Matrix to release this new EP. Sound-wise this band composes an intelligent and complex format of electronics, which reminds me a bit of Haujobb in a more contemporary format. There’s an interesting and sophisticated sonic creation, which sounds like an experiment in electro-pop or you can call it industrial-pop as well.</p>
                                        <p>The songs especially catch my attention for their multiple sound manipulations. I wasn’t surprised at all to find out that Entrzelle claims to be inspired by an artist like Seb Komor. The final result is not exactly similar, but the love and passion to create and manipulate sounds is pretty comparable.</p>
                                        <p>Entrzelle for sure injects something new into the wider fields of the electronic underground scene, but this complexity also appears to be the element that makes the music not accessible for a wider audience. I’m not surprised that the remix of “Pressure” by Psy’Aviah is one of the best and especially most danceable cuts on the EP. You here will notice some danceable vibes on top of Entrzelle’s sound.</p>
                                        <p>Another recommended song is “Proximity Love”, which somewhat moves into evasive passages while it’s carried by some danceable vibes. Avarice In Audio has remixes the song “Rites Of Romance” adding some cool synths on top of the song.</p>
                                        <p>The other songs are less danceable and not exactly EP-minded if you consider this format as DJ and/or club-minded. Entrzelle sounds more like a band to listen to and that’s maybe why they call it ‘cinematic’. I’m not always convinced by the twist between music and vocals, which sometimes sound like different entities that have been forced to match with each other. On the other side I really appreciate the concept of this release featuring 8 different songs.</p>
                                        <p>Notice by the way that 3 songs were originally released on their debut full length album, “Part Of The Movement”.</p>
                                        <p><strong>Conclusion</strong>: Entrzelle is an interesting newcomer on Alfa-Matrix although not the band with the most accessible sound. This EP is an excellent way to get a bit familiar with the duo and make up your mind about their complex electronics.</p>
                                        <p><strong>Best songs</strong>: “Pressure – Psy’Aviah Remix”, “Proximity Love”.</p>
                                        <p><strong>Rate</strong>: (DP:6½)DP.</p>
                                        <p><strong>Band</strong>: www.entrzelle.com / www.facebook.com/entrzelle</p>
                                        <p><strong>Label</strong>: www.alfa-matrix.com / www.facebook.com/Alfa.Matrix</p>
                                        
                                    </p>
                                </div>



                            </div>









                        </div>


                    </div> {/* reviews content */}
                    
                </div>
 
            </div>
        )
    }
}