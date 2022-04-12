import React from 'react';
import ReactDOM from 'react-dom';
import Title from './01-title/title';
import Home from './02-home/home';
import Contact from './99-contact/contact';
import './index.css';

//import GlassTile from './00-experimental/glassmorphTile';
//import AmnestyPLUS from './03-amnestyplus/AmnestyPLUS';

function App() {
  return (
    <div className="page-wrapper">
      <Title />
      <Home />
      <br />
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
