import React, { Component } from 'react';
import App from '../App';


// Internet Explorer 6-11
let isIE = /*@cc_on!@*/ false || !!document.documentMode;

export default class BrowserDetect extends Component {
  render() {
    if (isIE) {
      return ( 
        import './index.css';
        import './sanitize.css';
        <App />
      )
    } else {
      return <App />;
    }
  }
}
