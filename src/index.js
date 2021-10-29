import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Biography from './components/Biography';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Footer from './components/Footer';

ReactDOM.render(
  <div><Navbar/><Home/><Biography/><Experience/><Skills/><Blog/><Footer/></div>,
  document.getElementById('root')
);