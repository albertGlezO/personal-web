import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <Navbar/>
    <Body/>
    <Footer/>
  </div>,
  document.getElementById('root')
);