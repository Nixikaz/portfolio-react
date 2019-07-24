import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter, Route } from 'react-router-dom';

// Check for IE support
// const isIE = /*@cc_on!@*/false || !!document.documentMode;

class App extends Component {
  render() {
    // if(!isIE) {return (
      return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
      )
    // );} else {
    //   return (
    //     <div>
    //       <h1>This web site does not support Internet Explorer.</h1>
    //     </div>
    //   )
    }
  }

export default App;
