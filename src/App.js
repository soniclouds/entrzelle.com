import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header.component.js';
// import Info from './components/info.component.js';
// import Discography from './components/discography.component.js';
// import Gallery from './components/gallery.component.js';
// import Shop from './components/shop.component.js';
// import Reviews from './components/reviews.component.js';
// import Lyrics from './components/lyrics.component.js';
// import Contact from './components/contact.component.js';


function App() {
  return (
    <Router>
      <div className="container--outer-wrapper">
        <div className="overlay--outer-wrapper">

        </div>
        <div className="container--inner-wrapper">
          {/* refactor as component later */}
          {/*}
          <nav id="main-nav" className="mobile">
            <ul className="mobile list balance_4 top menu-length-8">
              <li className="top">
                <div><a className="top" href="/home">Home</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/info">Info</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/discography">Discography</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/gallery">Gallery</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/shop">Shop</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/reviews">Reviews</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/lyrics">Lyrics</a></div>
              </li>
              <li className="top">
                <div><a className="top" href="/contact">Contact</a></div>
              </li>
            </ul>
          </nav>
          */}

          <div className="main-content">
            <div id="container" className="container">
          
              <Header />
              <br />
              {/*
                <Route path='/' exact component={Info} />
                <Route path='/edit/:id' exact component={Discography} />
                <Route path='/create' exact component={Gallery} />
                <Route path='/user' exact component={Shop} />
                <Route path='/user' exact component={Reviews} />
                <Route path='/user' exact component={Lyrics} />
                <Route path='/user' exact component={Contact} />
              */}
            </div>
          </div>
        </div>
          
      </div>
    </Router>
          );
        }
        
        export default App;