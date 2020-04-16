import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home.component.js';
import Releases from './components/releases.component.js';
import Gallery from './components/gallery.component.js';
import Reviews from './components/reviews.component.js';


ReactDOM.render(
    <BrowserRouter>
        <App />
        <Route path='/' exact component={Home} />
        <Route path='/releases' component={Releases} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/reviews' component={Reviews} />
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
