import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>React Flux GraphQL</h3>
       Sinpu
       <Signup / >
      </div>
    );
  }
}

export default App;
