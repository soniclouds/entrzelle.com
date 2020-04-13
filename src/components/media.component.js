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
    componentDidMount() {
        // this.setColumnWidths();
        this.setColumnViewPosition();
    }

    setColumnViewPosition() {
        // video
        let mediaSidebarLeft = document.getElementById('media-sidebar-left');
        // mediaSidebarLeft.style.width = '0';
    }

    setColumnWidths() {
        // video
        let mediaSidebarLeft = document.getElementById('media-sidebar-left');
        mediaSidebarLeft.style.width = '0';

        // audio
        // let mediaSidebarRight = document.getElementById('audio-sidebar');
        let audioFeedColumn = document.getElementById('audio-feed-column');
        // audioFeedColumn.style.maxWidth = '0';
    }


    // NOTE: refactor below 2 methods as 1 method, using identity of clicked element to identify corresponding column

    toggleVideoColumn() {
        // let videoColumn = document.getElementById('video-feed-column');

        // if (videoColumn.style.display === '') {
        //     videoColumn.style.display = 'table-cell';
        // } else if (videoColumn.style.display !== 'none') {
        //     videoColumn.style.display = 'none';
        // } else {
        //     videoColumn.style.display = 'table-cell';
        // }
        
        // refactoring to target parent width

        let mediaSidebarLeft = document.getElementById('media-sidebar-left');

        if (mediaSidebarLeft.style.width === '0px') {
            mediaSidebarLeft.style.width = '25%';
        } else {
            mediaSidebarLeft.style.width = '0';
        }
    }

    toggleAudioColumn(e) {

        // let audioColumn = document.getElementById('audio-feed-column'),
        //     audioSidebar = document.getElementById('audio-sidebar');

        // if (audioColumn.style.display === '') {
        //     audioColumn.style.display = 'table-cell';
        //     audioSidebar.style.width = '25%';
        // } else if (audioColumn.style.display !== 'none') {
        //     audioColumn.style.display = 'none';
        //     audioSidebar.style.width = 'unset';
        // } else {
        //     audioColumn.style.display = 'table-cell';
        //     audioSidebar.style.width = '25%';
        // }
        
        // refactoring to target parent width

        // let mediaSidebarRight = document.getElementById('audio-sidebar');

        // if (mediaSidebarRight.style.width === '0px') {
        //     mediaSidebarRight.style.width = '25%';
        // } else {
        //     mediaSidebarRight.style.width = '0';
        // }

        let audioFeedColumn = document.getElementById('audio-feed-column');
        // audioFeedColumn.style.maxWidth = '0';

        if (audioFeedColumn.style.width === '0px') {
            audioFeedColumn.style.width = '25%';
        } else {
            audioFeedColumn.style.width = '0';
        }
    }

    render() {
        return (
            <div className='content-wrap'>
                
                {/* video column (left) */}
                
                <div id="media-sidebar-left" className="media-sidebar left">
                    
                    
                    <div id="video-feed-column" className="column-feed video-feed outer">
                        <div className="column-feed-content">
                            
                            {/* YT EMBED */}

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Total Progressive Collapse - album trailer" className="youtube-player" src="https://www.youtube.com/embed/lRH7Ztl5QCE?rel=0&amp;amp;wmode=transparent&amp;amp;enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Set These Walls On Fire - album trailer" src="https://www.youtube.com/embed/LChrPEfnNfc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className='video-container yt-embed column-content'>
                                <iframe title="Compatible With My Intoxication - lyrics video" src="https://www.youtube.com/embed/FXd1cu6KGV8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="media-toggle video outer"><button onClick={this.toggleVideoColumn}>video</button></div>

                </div>

                <div className="media-sidebar right" id="audio-sidebar">
                    

                    <div className="media-toggle audio outer"><button onClick={this.toggleAudioColumn}>audio</button></div>
                    
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