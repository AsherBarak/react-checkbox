import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A React Checkbox</h1>
        </header>
        <Checkbox>Check me out</Checkbox>
      </div>
    );
  }
}

export default App;
