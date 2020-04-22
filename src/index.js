import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home.component.js';
import News from './components/news.component.js';
import Releases from './components/releases.component.js';
import Gallery from './components/gallery.component.js';
import Reviews from './components/reviews.component.js';
import Lyrics from './components/lyrics.component.js';


ReactDOM.render(
    <BrowserRouter>
        <App />
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/releases' component={Releases} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/lyrics' component={Lyrics} />
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// serviceWorker();
// or maybe
// serviceWorker.register();
