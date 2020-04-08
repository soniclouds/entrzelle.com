import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/home.scss';

export default class Home extends Component {


    embedFacebookTimeline = (d, s, id) => {
        console.log('facebook timeline here');

        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=744521848981682";
        fjs.parentNode.insertBefore(js, fjs);

    }

    componentDidMount() {
        
        this.setSideColumnHeight();
        
        window.addEventListener('resize', this.setSideColumnHeight);

    }


    setSideColumnHeight() {
        let contentTop = document.getElementById('content').offsetTop,
            videoCol = document.getElementById('video-feed-column'),
            audioCol = document.getElementById('audio-feed-column');

            // videoCol.style.height = window.innerHeight - contentTop + 'px';
            // audioCol.style.height = window.innerHeight - contentTop + 'px';

            videoCol.style.height = window.innerHeight;
            audioCol.style.height = window.innerHeight;
    }

    render() {
        return (
            <div id='content-wrap'>
                <div id='content' className='row'>
                    
                    {/* video column (left) */}

                    <div id="video-feed-column" className="column-feed video-feed">

                        {/* YT EMBED */}

                        <div className='video-container yt-embed column-content'>
                            <iframe className="youtube-player" src="https://www.youtube.com/embed/lRH7Ztl5QCE?rel=0&amp;amp;wmode=transparent&amp;amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>

                        <div className='video-container yt-embed column-content'>
                            <iframe src="https://www.youtube.com/embed/LChrPEfnNfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className='video-container yt-embed column-content'>
                            <iframe src="https://www.youtube.com/embed/FXd1cu6KGV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        

                    </div>

                    <div id="audio-feed-column" className="column-feed audio-feed">
                        
                        <iframe className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=71792589/size=large/bgcol=000000/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version">Total Progressive Collapse (Bonus Tracks Version) by ENTRZELLE</a></iframe>

                        <iframe className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=4162682664/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep">Set These Walls On Fire EP by ENTRZELLE</a></iframe>

                    </div>
                </div>

            </div>
        )
    }
}