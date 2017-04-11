import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React YouTube Player</h2>
        </div>
        <p className="App-intro">
          a small project to experiment with React
        </p>
        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;

