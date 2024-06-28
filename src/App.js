import React, { Component } from 'react';
import './App.css';
import About from "./components/About/About";
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  state = {
    modalClass: 'modalClose'
  }

  handleModalClick() {
    this.state.modalClass === 'modalClose' ?
      this.setState({ modalClass: 'modalOpen' }) : this.setState({ modalClass: 'modalClose' })
  }


  render() {
    return (
      <div id="App">
        <div className='menu-button' onClick={() => this.handleModalClick()}>
        <i className="fas fa-bars "/>
        </div>
        <div className={`nav-container ${this.state.modalClass}`}>
          <ul className='nav'>
            <li><AnchorLink offset="46" href='#page1'>About</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page2'>Expertise</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page3'>Experience</AnchorLink></li>
            <li><AnchorLink offset="46" href='#page4'>Projects</AnchorLink></li>
            <li><AnchorLink offset="46" href="#page5">Contact</AnchorLink></li>
          </ul>
        </div>
        <div id='page1'><About /></div>
        <div id='page2'><Expertise /></div>
        <div id='page3'><Experience /></div>
        <div id='page4'><Projects /></div>
        <div id='page5'><Contact /></div>

        <div id="footer">
          Developed using React JS by Taylor Sam Copyright ©2018
        </div>
      </div>
    );
  }
}

export default App;
