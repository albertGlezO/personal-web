import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
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
    <Footer/>
  </div>,
  document.getElementById('root')
);