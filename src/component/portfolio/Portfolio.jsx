import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/todolist.png';
import MathMagicians from '../../assets/math-magicians.png';
import Leaderboard from '../../assets/leaderboard.png';
import Enjoy from '../../assets/enjoy-movie.png';

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: 'To Do List',
    github: 'https://github.com/sawmon71293/ToDoList',
    demo: 'https://sawmon71293.github.io/ToDoList/',
  },
  {
    id: 2,
    image: MathMagicians,
    title: 'Maths-magicians',
    github: 'https://github.com/sawmon71293/Math-magicians',
    demo: 'https://math-magicians-sawmon-n1hz.onrender.com/',
  },
  {
    id: 3,
    image: Leaderboard,
    title: 'Leaderboard',
    github: 'https://github.com/sawmon71293/LeaderBoard',
    demo: 'https://sawmon71293.github.io/LeaderBoard/',
  },
  {
    id: 4,
    image: Enjoy,
    title: 'Movie App',
    github: 'https://github.com/sawmon71293/Enjoy',
    demo: 'https://sawmon71293.github.io/Enjoy/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {data.map(({
        id, image, title, github, demo,
      }) => (
        <article
          key={id}
          className="portfolio_item"
        >
          <div className="portfolio__item-image">
            <img
              src={image}
              alt="Portfolio one"
            />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a
              href={github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;
