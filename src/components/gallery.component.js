import React, { Component } from 'react';

export default class Gallery extends Component {

    photos = [
        {
            src: 'https://imagery.zoogletools.com/u/64729/42f521f95519635214049aea191f2999506a2674/photo/postcard1-b.jpg',
            // width: 1,
            // height: 1
        },
        {
            src: 'https://imagery.zoogletools.com/u/64729/647d463667a5b6947999c2ecc587dcf35aaeb9fd/photo/1c.jpg',
            // width: 1,
            // height: 1
        }
    ];


    render() {
        return (
            <div>

                {/* <Gallery photos={this.photos} />; */}
                
            </div>
        )
    }
}