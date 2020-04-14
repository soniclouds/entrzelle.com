import React, { Component } from 'react';

import '../assets/css/media.scss';

export default class Media extends Component {

/* 
embedFacebookTimeline = (d, s, id) => {
    console.log('facebook timeline here');

    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=744521848981682";
    fjs.parentNode.insertBefore(js, fjs);

}
 */

    // constructor(props) {
    //     super(props);
    // }
    
    yt = document.getElementsByClassName('yt-embed');
    ytArr = Array.from(this.yt);


    componentDidMount() {
        // console.log(this.testVar);
    }

    toggleMediaColumn(e) {
        
        let targetId = e.target.id,
            videoColumn = document.getElementById('video-feed-column'),
            audioColumn = document.getElementById('audio-feed-column'),
            audioSidebar = document.getElementById('audio-sidebar');

        // video
        if (targetId === 'video-toggle-btn') {
            if (videoColumn.style.display === '') {
                videoColumn.style.display = 'table-cell';
            } else if (videoColumn.style.display !== 'none') {
                videoColumn.style.display = 'none';
            } else {
                videoColumn.style.display = 'table-cell';
            }
        }

        // audio
        if (targetId === 'audio-toggle-btn') {
            if (audioColumn.style.display === '') {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '25%';
            } else if (audioColumn.style.display !== 'none') {
                audioColumn.style.display = 'none';
                audioSidebar.style.width = 'unset';
            } else {
                audioColumn.style.display = 'table-cell';
                audioSidebar.style.width = '25%';
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
                
                {/* video column (left) */}
                
                <div id="media-sidebar-left" className="media-sidebar left">
                    
                    
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
                    
                    <div className="media-toggle video outer"><button id="video-toggle-btn" onClick={this.toggleMediaColumn}>video</button></div>

                </div>

                <div className="media-sidebar right" id="audio-sidebar">
                    

                    <div className="media-toggle audio outer"><button id="audio-toggle-btn" onClick={this.toggleMediaColumn}>audio</button></div>
                    
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