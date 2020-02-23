import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class Home extends Component {
 

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
            <div id='content-wrap'>
                <div id='content' className='row'>
                    <div className='col-4 home-columns'>

                        <div className='column--inner-container'>


                            <div className='column-content subscribe'>

                                <div className='form-container'>

                                    {/* NOTE: will need to refactor/redesign form later -- mainly placeholder for now */}

                                    <form className="simple_form captcha form-list-49581 member submit-check" id="new_member" data-sitekey="6Lfxx4EUAAAAAIuk746FxFg6gj7Ytjx--6K2eaia" data-controller="recaptcha" role="member" action="/home/mailing_list_features/49581/join" accept-charset="UTF-8" data-remote="true" method="post">
                                        <input name="utf8" type="hidden" value="✓" />
                                        <input type="hidden" name="_method" value="put" />

                                        <div className="control">
                                            <div className="input email required member_email string">
                                                <span className="input_field">
                                                    <input size="25" className="string email required" required="required" aria-required="" placeholder="Your email" type="email" name="member[email]" id="member_email" />
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="button positive">
                                                    Sign up
                                                </button>
                                            </div>
                                        </div>

                                        <input type="hidden" name="recaptcha_token" />
                                        
                                    </form>
                                </div>

                            </div>


                            {/* SOCIAL LINKS */}

                            <div className='column-content social-links'>
                                <ul className="">
                                    <li className="reverbnation">
                                        <a className="my_site_icon" target="_blank" title="http://www.reverbnation.com/entrzelle" href="http://www.reverbnation.com/entrzelle"></a>
                                    </li>      
                                    <li className="youtube">
                                        <a className="my_site_icon tip text-secondary" target="_blank" title="http://www.youtube.com/entrzelle" href="http://www.youtube.com/entrzelle"></a>
                                    </li>      
                                    <li className="facebook">
                                        <a className="my_site_icon tip text-secondary" target="_blank" title="http://www.facebook.com/entrzelle" href="http://www.facebook.com/entrzelle"></a>
                                    </li>      
                                    <li className="itunes">
                                        <a className="my_site_icon tip text-secondary" target="_blank" title="http://itunes.apple.com/us/album/part-of-the-movement/id494015958" href="http://itunes.apple.com/us/album/part-of-the-movement/id494015958"></a>
                                    </li>      
                                    <li className="soundcloud">
                                        <a className="my_site_icon tip text-secondary" target="_blank" title="http://www.soundcloud.com/entrzelle" href="http://www.soundcloud.com/entrzelle"></a>
                                    </li>
                                </ul>
                            </div>

                        
                            {/* YT EMBED */}

                            <div className='video-container yt-embed column-content'>
                                <iframe className="youtube-player" src="https://www.youtube.com/embed/lRH7Ztl5QCE?rel=0&amp;amp;wmode=transparent&amp;amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>

                            {/* FB EMBED */}    

                            <div className='fb-embed column-content'>
                                <div id="fb-root">&nbsp;</div>
                                
                                {this.embedFacebookTimeline(document, 'script', 'facebook-jssdk')}

                                <div className="fb-page" data-adapt-container-width="true"  data-hide-cover="true"
                                    data-href="https://www.facebook.com/entrzelle/" data-show-facepile="true" data-small-header="false"
                                    data-tabs="timeline" >
                                    <div className="fb-xfbml-parse-ignore">
                                        <blockquote cite="https://www.facebook.com/entrzelle/">
                                            <a href="https://www.facebook.com/entrzelle/">ENTRZELLE</a>
                                        </blockquote>
                                    </div>
                                </div>
                                
                                <div className="fb-page" data-adapt-container-width="true"  data-hide-cover="true"
                                    data-href="https://www.facebook.com/entrzelle/" data-show-facepile="true" data-small-header="false" data-tabs="events"
                                    >
                                    <div className="fb-xfbml-parse-ignore">
                                        <blockquote cite="https://www.facebook.com/entrzelle/">
                                            <a href="https://www.facebook.com/entrzelle/">ENTRZELLE</a>
                                        </blockquote>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div className='col-4 home-columns'>
                    </div>
                    
                    <div className='col-4 home-columns'>
                    </div>

                </div>

            </div>
        )
    }
}