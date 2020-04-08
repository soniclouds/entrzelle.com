import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header.component.js';
import Media from './components/media.component.js';

import Home from './components/home.component.js';
import Releases from './components/releases.component.js';

function App() {
  return (
      <div>
        <div className="container--outer-wrapper">
          <div className='background--image-wrapper'></div>
          
          <div className="container--inner-wrapper">
            <div className="main-content">
              <div id="container" className="container">
            
                <Header />
                <br />

                <Media />
                  {/* <Route path='/' exact component={Home} />
                  <Route path='/releases' component={Releases} /> */}
                  
              
              </div>
            </div>
          </div>
            
        </div>
      </div>
    
          );
        }
        
        export default App;