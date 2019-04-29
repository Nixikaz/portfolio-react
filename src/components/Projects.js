import React from 'react';
import Rps from '../images/rps.png';
import Etch from '../images/etch.png';

const Projects = () => {
  return (
    <main className="content content--single">
      <section id="projects">
        <h1>Projects</h1>
        <p>
          <img src={Rps} alt="Rock, Paper, Scissors" id="rps_img" />
          What is going on with this. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi voluptas
          beatae, reprehenderit obcaecati quae quo nesciunt voluptatem iure. Accusantium, laboriosam. Expedita maxime
          tempora provident dicta unde, commodi tenetur illo!
        </p>
        <p>
          <img src={Etch} alt="Rock, Paper, Scissors" id="etch_img" />
          What is going on with this. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi voluptas
          beatae, reprehenderit obcaecati quae quo nesciunt voluptatem iure. Accusantium, laboriosam. Expedita maxime
          tempora provident dicta unde, commodi tenetur illo!
        </p>
      </section>
    </main>
  );
};

export default Projects;
