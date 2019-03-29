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
            </form>
          </div>
        </section>
      </main>
    );
  }
}
