import React from 'react';
import BudgetApp from '../../assets/budgetingapp.png';
import Enjoy from '../../assets/enjoy-movie.png';
import MathMagicians from '../../assets/math-magicians.png';
import pet from '../../assets/pet.png';
import Portfolio1 from '../../assets/todolist.png';
import weather from '../../assets/weather.png';
import './portfolio.css';

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
    image: BudgetApp,
    title: 'Budgeting App',
    github: 'https://github.com/sawmon71293/react-router-budget-app',
    demo: 'https://react-router-budget-app-tau.vercel.app/',
  },
  {
    id: 4,
    image: Enjoy,
    title: 'Movie App',
    github: 'https://github.com/sawmon71293/Enjoy',
    demo: 'https://sawmon71293.github.io/Enjoy/',
  },
  {
    id: 5,
    image: pet,
    title: 'Pet Clinic',
    github: 'https://github.com/sawmon71293/Pet',
    demo: 'https://pet-care-r84x.onrender.com/',
  },
  {
    id: 6,
    image: weather,
    title: 'Weather Tracker',
    github: 'https://github.com/sawmon71293/Weather-app',
    demo: 'https://weatherapp-sawmon.netlify.app/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <div className="purple-space-image" />
    <h5 style={{ marginBottom: '-5px', fontFamily: "'Poiret One', cursive" }}>My Recent Work</h5>
    <h2 style={{ fontSize: '30px', fontFamily: "'Black Ops One', cursive", color: 'white' }}>Portfolio</h2>
    <div className="portfolio__container">
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
          <h3 style={{ marginBottom: '20px', fontFamily: "'Didact Gothic', sans-serif", fontWeight: '700' }}>{title}</h3>
          <div className="portfolio_item-cta">
            <a
              style={{ textAlign: 'center', width: '130px' }}
              href={github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              style={{ textAlign: 'center', width: '130px' }}
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
