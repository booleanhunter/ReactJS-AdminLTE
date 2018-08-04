import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//edit App.js 


ReactDOM.render(
    // to support page routing
    //  <BrowserRouter>
    <App />
    // </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
