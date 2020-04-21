/* eslint-disable no-unused-expressions */
import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header.component.js';
import Media from './components/media.component.js';

const strapi = new Strapi('http://localhost:1337');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

  }

  async componentDidMount() {
    try {
      const newsPosts = await strapi.getEntries('news');
      // console.log('checking type of newPosts: ', Array.isArray(newsPosts));
      this.setState({ posts: newsPosts });

      console.log("checking this.state.posts: ", this.state.posts);
    }
    catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div>
        <div className="container--outer-wrapper">
          <div className='background--image-wrapper'></div>
          
          <div className="container--inner-wrapper">
            <div className="main-content">
              <div id="container" className="container">
            
                <Header />

                <Media />
              
                <section>
                  {/* {this.state.posts.map(({ post }) => <article><div>Title: {post.Title}</div><div>Content: {post.Content}</div></article>
                  )} */}

                  {/* {this.state.posts.map(({ post }) => <article><div>{post}</div></article>
                  )} */}

                  {this.state.posts.map(post => <article><div>Title: {post.Title}</div><div>Content: {post.Content}</div></article>)}

                  {/* {this.state.posts} */}

                </section>
              </div>
            </div>
          </div>
            
        </div>
      </div>
      
    );
  }
}
        
export default App;