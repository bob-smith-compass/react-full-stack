import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Signup from './components/signup/Signup';
import CKEditor from 'react-ckeditor-component';
import Fragment from './components/fragment/Fragment';
import Navbar from './components/navbar/Navbar';
import Themes from './components/themes/Themes';

class App extends Component {
  render() {
    const names = ['David', 'Sean', 'Abel', 'Jacob'];
    const last = 'Shams';
    return (
      <div className="App container-fluid dark">
        <Navbar />
        <i className="fab fab-github">icon</i>
        <Themes />
        <h3>React Flux GraphQL </h3><a href="https://themes.getbootstrap.com/product/dashboard/">THEMES</a>
        Sinpu
         <Fragment names={names} last={last}/>
        <Signup />
        Editor
       <CKEditor />
      </div>
    );
  }
}

export default App;
