import React, { Component } from 'react';
import html_svg from '../images/html5.svg';
import css3_svg from '../images/css3.svg';
import javascript_svg from '../images/javascript.svg';

export default class Home extends Component {
  render() {
    return (
      <main className="content">
        <section>
          <abbr title="Hyper-Text Markup Language">
            <h1>HTML</h1>
          </abbr>
          <img className="svg--html" src={html_svg} alt="HTML5 Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum, ratione atque repellendus aut
            corrupti fugit nisi enim. Iure quisquam voluptatum ut tempora ab porro corrupti doloribus facilis maiores
            repudiandae.
          </p>
        </section>
        <section>
          <abbr title="Cascading Style Sheets">
            <h1>CSS</h1>
          </abbr>
          <img className="svg--css" src={css3_svg} alt="CSS3 Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum, ratione atque repellendus aut
            corrupti fugit nisi enim. Iure quisquam voluptatum ut tempora ab porro corrupti doloribus facilis maiores
            repudiandae.
          </p>
        </section>
        <section>
          <h1>JavaScript</h1>
          <img className="svg--javascript" src={javascript_svg} alt="JavaScript Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum, ratione atque repellendus aut
            corrupti fugit nisi enim. Iure quisquam voluptatum ut tempora ab porro corrupti doloribus facilis maiores
            repudiandae.
          </p>
        </section>
      </main>
    );
  }
}
