import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="head__contianer">
          <Logo />
          <Navbar />
        </header>
        <main>
          <section>
            <abbr title="Hyper-Text Markup Language">
              <h1>HTML</h1>
            </abbr>
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum, ratione atque repellendus aut
              corrupti fugit nisi enim. Iure quisquam voluptatum ut tempora ab porro corrupti doloribus facilis maiores
              repudiandae.
            </p>
          </section>
          <section>
            <h1>JavaScript</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum, ratione atque repellendus aut
              corrupti fugit nisi enim. Iure quisquam voluptatum ut tempora ab porro corrupti doloribus facilis maiores
              repudiandae.
            </p>
          </section>
        </main>
        <footer>
          <div class="card__dark">&copy; 2019 Kevin Zembrodt</div>
        </footer>
      </div>
    );
  }
}

export default App;
