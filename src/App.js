import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox'

class App extends Component {
  constructor(props) {
    super(props);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.state = { check: false };
  }

  onCheckChange(val) {
    this.setState({ check: val })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A React Checkbox</h1>
        </header>
        <Checkbox onChange={this.onCheckChange}>Check me out</Checkbox>
        <input type='checkbox'/>System checkbox for comparison
        <div>Check state in containing component: {this.state.check.toString()}</div>
      </div>
    );
  }
}

export default App;
