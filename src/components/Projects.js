import React from 'react';
import Portfolio from '../images/portfolio.png';
import Rps from '../images/rps.png';
import Etch from '../images/etch.png';

const Projects = () => {
  return (
    <main className="content content--single">
      <section id="projects">
        <h1>Projects</h1>
        <div>
          <h2>My Portfolio</h2>
          <p>
            <img src={Portfolio} alt="Portfolio" id="portfolio_img" />
            Originally I had planned to create this website purely in HTML, CSS, and JavaScript without using any
            libraries or frameworks. Although, I recently began learning React and decided it would be a good learning
            experience to create this site using React.
            <br />
            <a href="https://github.com/Nixikaz/portfolio-react" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </p>
        </div>
        <div>
          <h2>Rock, Paper, Scissors</h2>
          <p>
            <a href="https://nixikaz.github.io/" target="_blank" rel="noopener noreferrer">
              <img src={Rps} alt="Rock, Paper, Scissors" id="rps_img" />
            </a>
            This was an early project that was done entirely in vanilla JavaScript. The game is simple but shows off my
            knowledge of DOM creation and conditional statements. <br />
            <a href="https://github.com/Nixikaz/Nixikaz.github.io" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </p>
        </div>
        <div>
          <h2>Etch-a-Sketch</h2>
          <p>
            <a href="https://nixikaz.github.io/etch/etchasketch.html" target="_blank" rel="noopener noreferrer">
              <img src={Etch} alt="Rock, Paper, Scissors" id="etch_img" />
            </a>
            This project was an early one as well. Again, it uses vanilla JavaScript and shows off DOM creation,
            looping, and conditional statements.
            <br />
            <a
              href="https://github.com/Nixikaz/Nixikaz.github.io/tree/master/etch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Projects;
