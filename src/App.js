import React, { Component } from 'react';
import './App.css';
import InitializeEmployeesModel from './InitializeEmployeesModel';
import Navbar from './Navbar';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar title="Assignment 2 - Employee Details"/>
      <Container />
      <InitializeEmployeesModel />
      </div>
    );
  }
}

export default App;
