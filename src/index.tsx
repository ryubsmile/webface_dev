import React from 'react';
import ReactDOM from 'react-dom';
import Title from './01-title/title';
import Home from './02-home/home';
import Tile from './00-experimental/glassmorphTile';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Tile>
      <Home />
    </Tile>
    <Title />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
