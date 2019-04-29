import React from 'react';
import Rps from '../images/rps.png';
import Etch from '../images/etch.png';

const Projects = () => {
  return (
    <main className="content content--single">
      <section id="projects">
        <h1>Projects</h1>
        <p>
          <a href="https://nixikaz.github.io/" target="_blank" rel="noopener noreferrer"><img src={Rps} alt="Rock, Paper, Scissors" id="rps_img" /></a>
          This was an early project that was done entirely in vanilla JavaScript. The game is simple but shows off my knowledge
          of DOM creation and conditional operations. <br />The source code for this project can be found on my <a href="https://github.com/Nixikaz/Nixikaz.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <p>
          <a href="https://nixikaz.github.io/etch/etchasketch.html" target="_blank" rel="noopener noreferrer"><img src={Etch} alt="Rock, Paper, Scissors" id="etch_img" /></a>
          This project was an early one as well. Again, it uses vanilla JavaScript and shows off DOM creation, looping, and conditionals.<br />
          The source code for this project is on my <a href="https://github.com/Nixikaz/Nixikaz.github.io/tree/master/etch" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>
    </main>
  );
};

export default Projects;
