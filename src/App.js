import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import CKEditor from 'react-ckeditor-component';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>React Flux GraphQL</h3>
       Sinpu
       <Signup / >
       Editor
       <CKEditor />
      </div>
    );
  }
}

export default App;
