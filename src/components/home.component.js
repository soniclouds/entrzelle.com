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
                    
                </div>

            </div>
        )
    }
}