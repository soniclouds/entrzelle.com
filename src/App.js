/* eslint-disable no-unused-expressions */
import React from 'react';

import "./assets/fontello/css/fontello.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/header.component.js';
import Media from './components/media.component.js';
import Connect from './components/connect.component.js';

import Footer from './components/footer.component.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container--outer-wrapper">
          <div className='background--image-wrapper'></div>
          
          <div className="container--inner-wrapper">
            <div className="main-content">
              {/* <div id="container" className="container"> */}
              <div id="container" className="">
            
                <Header />

                <Media />

                <Connect />
            
                <Footer />

              </div>
            </div>
          </div>
            
        </div>
      </div>
      
    );
  }
}
        
export default App;