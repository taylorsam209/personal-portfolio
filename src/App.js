import React, { Component } from 'react';
import './App.css';
import About from "./components/About/About";
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className='nav-container'>
          <ul className='nav'>
            <li><a href="#page4">Contact</a></li>
            <li><a href='#page3'>Work</a></li>
            <li><a href='#page2'>Skills</a></li>
            <li><a href='#page1'>About</a></li>
          </ul>
        </div>
        <div id='page1'><About /></div>
        <div id='page2'><Expertise /></div>
        <div id='page3'><Projects /></div>
        <div id='page4'><Contact /></div>
      </div>
    );
  }
}

export default App;
