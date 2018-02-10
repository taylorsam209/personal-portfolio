import React, { Component } from 'react';
import './App.css';
import About from "./components/About/About";
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className='nav-container'>
          <ul className='nav'>
            <li><AnchorLink href="#page4">Contact</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page3'>Work</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page2'>Expertise</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page1'>About</AnchorLink></li>
          </ul>
        </div>
        <div id='page1'><About /></div>
        <div id='page2'><Expertise /></div>
        <div id='page3'><Projects /></div>
        <div id='page4'><Contact /></div>
        
        <div id="footer">
        Made with ReactJS
        <span>Developed with Skills</span>
        </div>
      </div>
    );
  }
}

export default App;
