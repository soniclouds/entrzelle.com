import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header.component.js';
import Media from './components/media.component.js';

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
              
              </div>
            </div>
          </div>
            
        </div>
      </div>
    
          );
        }
        
        export default App;