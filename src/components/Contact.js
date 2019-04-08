import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <main className="content">
        <section className="card">
          <div className="card__title">
            <h1>Contact</h1>
          </div>
          <div className="card__body">
            <form action="/thankyou" netlify>
              <label htmlFor="fName">First Name</label>
              <input type="text" name="fName" id="firstName" />
              <label htmlFor="lName">Last Name</label>
              <input type="text" name="lName" id="lastName" />
              <label htmlFor="email">E-Mail Address</label>
              <input type="text" name="email" id="emailAddress" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="shortMessage" cols="30" rows="10"></textarea>
            </form>
          </div>
        </section>
      </main>
    );
  }
}
