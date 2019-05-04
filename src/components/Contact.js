import React, { Component } from 'react';
import HideModal from './HideModal';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { first: '', last: '', email: '', message: '' };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => {
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('test1').style.opacity = '1';
        document.getElementById('test1').style.display = 'grid';
        document.getElementById('test1').style.transform = 'translate(-50%, -50%)';
      })
      .catch(error => console.log(error));

    e.preventDefault();
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { first, last, email, message } = this.state;
    return (
      <main className="content content--single">
        <section id="contact">
          <h1>Contact</h1>
          <form onSubmit={this.handleSubmit} name="contact" className="form__contact" action="/thankyou">
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" value={first} id="firstName" onChange={this.handleChange} />
            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" value={last} id="lastName" onChange={this.handleChange} />
            <label htmlFor="email">E-Mail Address</label>
            <input type="text" name="email" value={email} id="emailAddress" onChange={this.handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} rows="5" onChange={this.handleChange} />
            <button type="submit">Send Message</button>
            <div className="modal" id="myModal" onClick={HideModal} />
            <div className="thank-you" id="test1">
              <h1>Thank you for contacting me, {this.state.first}.</h1>
              <h4>I will get back to you as soon as possible.</h4>
              <span id="closeBtn" onClick={HideModal}>
                &times;
              </span>
            </div>
          </form>
        </section>
      </main>
    );
  }
}
