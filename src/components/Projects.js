import React from 'react';
import Portfolio from '../images/portfolio.png';
import Rps from '../images/rps.png';
import Etch from '../images/etch.png';

const Projects = () => {
  return (
    <main className="content content--single">
      <section id="projects">
        <h1>Projects</h1>
        <div className="project">
          <h2>My Portfolio</h2>
          <img src={Portfolio} alt="Portfolio" id="portfolio_img" />
          <ul>
            <li>
              <strong>Objective:</strong> Create a web site to display current knowledge of web development skills.
            </li>
            <li>
              <strong>Challenges:</strong> Learn how to create an <abbr title="Single-page application">SPA</abbr> for a
              faster and smoother user experience.
            </li>
            <li>
              <strong>Technologies Used:</strong> React, HTML, CSS, JavaScript.
            </li>
            <li>
              <a href="https://github.com/Nixikaz/portfolio-react" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div className="project">
          <h2>Rock, Paper, Scissors</h2>
          <a href="https://nixikaz.github.io/" target="_blank" rel="noopener noreferrer">
            <img src={Rps} alt="Rock, Paper, Scissors" id="rps_img" />
          </a>
          <ul>
            <li>
              <strong>Objective:</strong> Create a Rock, Paper, Scissors game that keeps score and defines a winner
              after 5 wins.
            </li>
            <li>
              <strong>Challenges:</strong> <abbr title="Document Object Model">DOM</abbr> elements created from
              JavaScript for the goal of writing as little HTML as possible.
            </li>
            <li>
              <strong>Technologies Used:</strong> HTML, CSS, JavaScript
            </li>
            <li>
              <a href="https://github.com/Nixikaz/Nixikaz.github.io" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div className="project">
          <h2>Etch-a-Sketch</h2>
          <a href="https://nixikaz.github.io/etch/etchasketch.html" target="_blank" rel="noopener noreferrer">
            <img src={Etch} alt="Rock, Paper, Scissors" id="etch_img" />
          </a>
          <ul>
            <li>
              <strong>Objective:</strong> Create a sketch pad using CSS and pure JavaScript.
            </li>
            <li>
              <strong>Challenges:</strong> Dynamically create <abbr title="Document Element Model">DOM</abbr> elements
              from a form input for grid size. Placing limitations on the grid size for performance purposes.
            </li>
            <li>
              <strong>Technologies Used:</strong> HTML, CSS, Bootstrap, Javascript
            </li>
            <li>
              <a
                href="https://github.com/Nixikaz/Nixikaz.github.io/tree/master/etch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Projects;
