/* eslint-disable no-unused-expressions */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header.component.js';
import Media from './components/media.component.js';
import Connect from './components/connect.component.js';


class App extends React.Component {

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

                <Connect />
            
              </div>
            </div>
          </div>
            
        </div>
      </div>
      
    );
  }
}
        
export default App;