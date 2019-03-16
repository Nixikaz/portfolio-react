import React, { Component } from 'react';
import html_svg from '../images/html5.svg';
import css3_svg from '../images/css3.svg';
import javascript_svg from '../images/javascript.svg';
import SkillsCard from './SkillsCard';
export default class Home extends Component {
  render() {
    return (
      <main className="content">
        <SkillsCard
          title="HTML"
          img={html_svg}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque quia quos reprehenderit impedit! Rerum illum ut minima, vel alias dolor sed aperiam, dolore suscipit nobis, vero unde! Accusamus, obcaecati.
            Impedit officia repellat labore ad deleniti ab eius sapiente? Non reprehenderit facere alias nulla fugiat quae. Optio quidem, minima necessitatibus, ipsa culpa adipisci sunt, perspiciatis modi eaque distinctio saepe perferendis!
            Accusamus provident blanditiis itaque voluptatibus eveniet facilis modi harum, odit magni. Et expedita provident distinctio natus modi commodi officiis culpa ipsum enim? Nihil nostrum amet vel iusto ipsam repellendus neque?
           Hello these, How are you doing. I'm just testing this out and seeing if it works.
          "
        />
        <SkillsCard
          title="CSS"
          img={css3_svg}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque quia quos reprehenderit impedit! Rerum illum ut minima, vel alias dolor sed aperiam, dolore suscipit nobis, vero unde! Accusamus, obcaecati.
            Impedit officia repellat labore ad deleniti ab eius sapiente? Non reprehenderit facere alias nulla fugiat quae. Optio quidem, minima necessitatibus, ipsa culpa adipisci sunt, perspiciatis modi eaque distinctio saepe perferendis!
            Accusamus provident blanditiis itaque voluptatibus eveniet facilis modi harum, odit magni. Et expedita provident distinctio natus modi commodi officiis culpa ipsum enim? Nihil nostrum amet vel iusto ipsam repellendus neque?
          Hello these, How are you doing. I'm just testing this out and seeing if it works.
          "
        />
        <SkillsCard
          title="JS"
          img={javascript_svg}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque quia quos reprehenderit impedit! Rerum illum ut minima, vel alias dolor sed aperiam, dolore suscipit nobis, vero unde! Accusamus, obcaecati.
            Impedit officia repellat labore ad deleniti ab eius sapiente? Non reprehenderit facere alias nulla fugiat quae. Optio quidem, minima necessitatibus, ipsa culpa adipisci sunt, perspiciatis modi eaque distinctio saepe perferendis!
            Accusamus provident blanditiis itaque voluptatibus eveniet facilis modi harum, odit magni. Et expedita provident distinctio natus modi commodi officiis culpa ipsum enim? Nihil nostrum amet vel iusto ipsam repellendus neque?
          Hello these, How are you doing. I'm just testing this out and seeing if it works.
          "
        />
      </main>
    );
  }
}
