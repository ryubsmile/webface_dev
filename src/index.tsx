import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Title from './01-title/title';
import Home from './02-home/home';
import Works from './03-works/works';
import Contact from './99-contact/contact';

// "react-reveal": "^1.2.2",
// "moment": "^2.29.2",

function App() {
  return (
    <div className="page-wrapper">
      <Title />
      <Home />
      <Works />
      <Contact />
    </div>
  );
}

// RENDER
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
