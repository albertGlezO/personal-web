import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();*/

ReactDOM.render(
  <div>
    <Navbar/>
    <Body/>
    <Footer/>
  </div>,
  document.getElementById('root')
);