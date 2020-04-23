import React, { Component } from 'react';

export default class FB extends Component {

    embedFacebookTimeline = (d, s, id) => {
        console.log('facebook timeline here');

        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=744521848981682";
        fjs.parentNode.insertBefore(js, fjs);

    }
    
    render() {
        return (
          <div id="fb-component-container">
 
                {/* FB EMBED */}

                <div className='fb-embed column-content'>
                    <div id="fb-root">&nbsp;</div>

                    {this.embedFacebookTimeline(document, 'script', 'facebook-jssdk')}

                    <div className="fb-page" data-adapt-container-width="true" data-hide-cover="true"
                        data-href="https://www.facebook.com/entrzelle/" data-show-facepile="true" data-small-header="false"
                        data-tabs="timeline" >
                        <div className="fb-xfbml-parse-ignore">
                            <blockquote cite="https://www.facebook.com/entrzelle/">
                                <a href="https://www.facebook.com/entrzelle/">ENTRZELLE</a>
                            </blockquote>
                        </div>
                    </div>

                    {/* <div className="fb-page" data-adapt-container-width="true" data-hide-cover="true"
                        data-href="https://www.facebook.com/entrzelle/" data-show-facepile="true" data-small-header="false" data-tabs="events"
                    >
                        <div className="fb-xfbml-parse-ignore">
                            <blockquote cite="https://www.facebook.com/entrzelle/">
                                <a href="https://www.facebook.com/entrzelle/">ENTRZELLE</a>
                            </blockquote>
                        </div>
                    </div> */}

                </div>

          </div>
        )
    }
}