import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Leasing from './components/Leasing/Leasing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Leasing/>
      </div>
    );
  }
}

export default App;
