import React from 'react';
import ReactDOM from 'react-dom';
import Title from './01-title/title';
import Home from './02-home/home';
import Tile from './00-experimental/glassmorphTile';
import './index.css';
import AmnestyPLUS from './03-amnestyplus/AmnestyPLUS';

function App() {
  return (
    <div className="page-wrapper">
      <Title />
      <Tile>
        <Home />
      </Tile>
      <Tile>
        <AmnestyPLUS />
      </Tile>
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
