import React from 'react';

const About = () => {
  return (
    <main className="content">
      <section className="card">
        <div className="card__title">
          <h1>About</h1>
        </div>
        <div className="card__body">
          <p>
            Hi, my name is Kevin. I am a self-taught front-end web developer and coding has become a big part of my
            life. I’m married to an amazing wife and have a wonderful 15 month old daughter. In my spare time, I enjoy
            coding, playing video games, or playing my guitar.
          </p>
          <p>
            My interest in web development began in 1994 when I built my first website in notepad and hosted it on the
            free web space provided by my ISP. This was before CSS was invented and after loading up my website with
            animated GIFs and center tags, I lost interest.
          </p>
          <p>
            Around 2003 I tried my hand at web development again. This time around I started to learn to develop in PHP
            using MySQL as a back-end. I designed this website to use CRUD operations to manage my content. At this time
            I was still only using tables for layout. I had not used CSS until 2005 while I was taking an HTML class in
            art school.
          </p>
          <p>
            Finally about two years ago, I was assigned a task at work to develop a front-end to display metrics for my
            company’s production floor. I had to learn to use JavaScript for the project, as well as jQuery, and D3.js.
            I also had to learn how to use AJAX requests. It was then that I decided to learn as much as I can and
            pursue a career in web development. Now I am starting to learn React and eventually would like to evolve
            into a full stack developer.
          </p>
          <p />
        </div>
      </section>
    </main>
  );
};

export default About;
