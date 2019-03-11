import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item item1">I'm sidebar #1</div>
          <div className="item item2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos a in ipsam? Enim eveniet soluta
            nesciunt molestias cupiditate non voluptatibus itaque, molestiae rem, vitae pariatur temporibus quo a
            impedit.
          </div>
          <div className="item item3">I'm sidebar #2</div>
          <div className="item footer">I'm the footer</div>
        </div>
      </div>
    );
  }
}

export default App;
