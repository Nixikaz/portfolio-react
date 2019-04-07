import React, { Component } from 'react';

export default class Javascript extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <section className="card card--hover">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <p>
            <img className="svg--large" src={img} alt={title} />
            Writing JavaScript is what really drove me into wanting to become a web developer. In just under two years,
            I have learned a lot about coding in JavaScript. I have just started using React. In fact, this website was
            built using React as a learning experience. I am pretty familiar with writing vanilla JavaScript, but I also
            have experience with jQuery and D3.js.
          </p>
        </div>
      </section>
    );
  }
}
