import React, { Component } from 'react';

import '../assets/css/media.scss';

export default class Media extends Component {
    
    componentDidMount() {
        this.yt = document.getElementsByClassName('yt-embed');
        this.ytArr = Array.from(this.yt);
    }
    
    toggleMediaColumn(e) {
        
        let targetId = e.target.id,
        videoColumn = document.getElementById('video-feed-column'),
        videoSidebar = document.getElementById('video-sidebar'),
        audioColumn = document.getElementById('audio-feed-column'),
        audioSidebar = document.getElementById('audio-sidebar');
        
        // COLUMN TOGGLE =============================================

        // video
        if (targetId === 'video-toggle-btn--column') {
            if (videoColumn.style.display === '') {
                videoColumn.style.display = 'table-cell';
                videoSidebar.style.width = '23%';
            } else if (videoColumn.style.display !== 'none') {
                videoColumn.style.display = 'none';
                videoSidebar.style.width = 'unset';
            } else {
                videoColumn.style.display = 'table-cell';
                videoSidebar.style.width = '23%';
            }
        }
        
        // audio
        if (targetId === 'audio-toggle-btn--column') {
            if (audioColumn.style.display === '') {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '23%';
            } else if (audioColumn.style.display !== 'none') {
                audioColumn.style.display = 'none';
                audioSidebar.style.width = 'unset';
            } else {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '23%';
            }
        }    

        // HEADER TOGGLE =============================================

        // video
        if (targetId === 'video-toggle-btn--header') {
            if (videoColumn.style.display === '') {
                videoColumn.style.display = 'table-cell';
                videoSidebar.style.width = '50%';
            } else if (videoColumn.style.display !== 'none') {
                videoColumn.style.display = 'none';
                videoSidebar.style.width = 'unset';
            } else {
                videoColumn.style.display = 'table-cell';
                videoSidebar.style.width = '50%';
            }
        }

        // audio
        if (targetId === 'audio-toggle-btn--header') {
            if (audioColumn.style.display === '') {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '50%';
            } else if (audioColumn.style.display !== 'none') {
                audioColumn.style.display = 'none';
                audioSidebar.style.width = 'unset';
            } else {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '50%';
            }
        }    

    }
 
    stopVideo(e) {
        let iframe = e.querySelector('iframe'),
            video = e.querySelector('video');
        // console.log(iframe);
        // console.log('<br>');
        // console.log(video);
        if (iframe) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if (video) {
            video.pause();
        }
    };
    render() {
        return (
            <div className='content-wrap'>

                <div className="media-toggle-header video"><button id="video-toggle-btn--header" onClick={this.toggleMediaColumn}>video</button></div>
                <div className="media-toggle-header audio outer"><button id="audio-toggle-btn--header" onClick={this.toggleMediaColumn}>audio</button></div>
                
                {/* video column (left) */}
                
                <div id="video-sidebar" className="media-sidebar left">
                    
                    <div id="video-feed-column" className="column-feed video-feed outer">
                        <div className="column-feed-content">
                            
                            {/* YT EMBED */}

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Total Progressive Collapse - album trailer" className="youtube-player" src="https://www.youtube.com/embed/lRH7Ztl5QCE?rel=0&version=3&enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Set These Walls On Fire - album trailer" className="youtube-player" src="https://www.youtube.com/embed/LChrPEfnNfc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Compatible With My Intoxication - lyrics video" className="youtube-player" src="https://www.youtube.com/embed/FXd1cu6KGV8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="media-toggle-column video outer"><button id="video-toggle-btn--column" onClick={this.toggleMediaColumn}>video</button></div>

                </div>

                <div className="media-sidebar right" id="audio-sidebar">

                    <div className="media-toggle-column audio outer"><button id="audio-toggle-btn--column" onClick={this.toggleMediaColumn}>audio</button></div>
                    
                    <div id="audio-feed-column" className="column-feed audio-feed outer">                        
                        <div className="column-feed-content">
                            <iframe title="Total Progressive Collapse - audio player" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=71792589/size=large/bgcol=000000/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version">Total Progressive Collapse (Bonus Tracks Version) by ENTRZELLE</a></iframe>

                            <iframe title="Set These Walls On Fire - audio player" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=4162682664/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep">Set These Walls On Fire EP by ENTRZELLE</a></iframe>
                        
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}