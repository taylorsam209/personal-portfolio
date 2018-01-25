import React, { Component } from 'react';
import './App.css';
import About from "./components/About/About";
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor';

class App extends Component {
  render() {
    configureAnchors({offset: -100, scrollDuration:800})
    return (
      <div id="App">
      <div className='nav-container'>
        <ul className='nav'>
          <li onClick={()=>{goToAnchor()}}>Contact</li>
          <li><a href='#page3'>Projects</a></li>
          <li><a href='#page2'>Expertise</a></li>
          <li><a href='#page1'>About</a></li>
        </ul>
        </div>
        <ScrollableAnchor id={'page1'}><div id='page1'><About /></div></ScrollableAnchor>
        <ScrollableAnchor id={'page2'}><div id='page2'><Expertise /></div></ScrollableAnchor>
        <ScrollableAnchor id={'page3'}><div id='page3'><Projects /></div></ScrollableAnchor>
        <ScrollableAnchor id={'page4'}><div id='page4'><Contact /></div></ScrollableAnchor> 
      </div>
    );
  }
}

export default App;
