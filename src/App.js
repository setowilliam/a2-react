import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Assignment 2 - Employee Details"/>
        <Container />
      </div>
    );
  }
}

export default App;
