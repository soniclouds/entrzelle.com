import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar.component.js';
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
      <div className='container'>
        <Navbar />
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
    </Router>
  );
}

export default App;