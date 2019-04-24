import React from 'react';
import WifeAndI from '../images/wife_and_i.jpg';
import UnderCon from '../images/undercon.gif';
import PhpLogo from '../images/php.svg';
import MySqlLogo from '../images/mysql.svg';
import D3DotJs from '../images/d3-dot-js.svg';
import JQuery from '../images/jquery.svg';
import ReactLogo from '../images/react.svg';

const About = () => {
  return (
    <main className="content content--single">
      <section id="about">
        {/* <h1>About</h1> */}
        <p>
          <img src="https://source.unsplash.com/random/250x250" alt="test" className="image__fam" />
          Hi, my name is Kevin. I am a self-taught front-end web developer and coding has become a big part of my life.
          I’m married to an amazing wife and have a wonderful 15 month old daughter. In my spare time, I enjoy coding,
          playing video games, or playing my guitar.
        </p>
        <p>
          <img src="https://source.unsplash.com/random/160x160" alt="test" className="image__undercon" />
          My interest in web development began in 1994 when I built my first website in notepad and hosted it on the
          free web space provided by my ISP. This was before CSS was invented and after loading up my website with
          animated GIFs and center tags, I lost interest.
        </p>
        <p>
          <img src={PhpLogo} alt="test" className="image__php" />
          <img src={MySqlLogo} alt="test" className="image__php" />
          Around 2003 I tried my hand at web development again. This time around I started to learn to develop in PHP
          using MySQL as a back-end. I designed the website to use CRUD operations to manage my content. At this time I
          was still only using tables for layout. I had not used CSS until 2005 while I was taking an HTML class in art
          school.
        </p>
        <p>
          Finally about two years ago, I was assigned a task at work to develop a front-end to display metrics for my
          <img src={D3DotJs} alt="test" className="image__d3" />
          company’s production floor. I had to learn to use JavaScript for the project, as well as jQuery, and D3.js.
          <img src={JQuery} alt="test" className="image__jq" />I also had to learn how to use AJAX requests. It was then that I decided to learn as much as I can and pursue a
          <img src={ReactLogo} alt="test" className="image__react" />
          career in web development. Now I am starting to learn React and eventually would like to become a full
          stack developer.
        </p>
        <p />
      </section>
    </main>
  );
};

export default About;
