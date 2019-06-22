import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import CKEditor from 'react-ckeditor-component';
import Fragment from './components/fragment/Fragment';

class App extends Component {
  render() {
    const names = ['David', 'Sean', 'Abel', 'Jacob'];
    const last = 'Shams';
    return (
      <div className="App">
        <h3>React Flux GraphQL</h3>
        Sinpu
         <Fragment name={names}/>
        <Signup />
        Editor
       <CKEditor />
      </div>
    );
  }
}

export default App;
