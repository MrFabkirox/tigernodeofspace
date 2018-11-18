import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Posts />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
