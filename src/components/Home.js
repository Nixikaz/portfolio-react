import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';

export default class Home extends Component {
  // animateCard(e) {
  //   console.log(e)
  //   let st = e.target.style;
  //   st.transition = 'all .5s ease-in';
  //   st.opacity = '1';
  //   st.transform = 'translateY(-1rem)';
  // }
  render() {
    return (
      <main className="content">
        <Html />
        <Css />
        <Javascript />
      </main>
    );
  }
}
