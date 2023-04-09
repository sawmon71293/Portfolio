import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Frontend Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Creating static websites with HTML, CSS, and JavaScript</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Developing simple web applications using frameworks such as
              React
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Creating responsive website layouts using Bootstrap or Tailwind
              CSS
            </p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Back-end development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Using Java and Springboot to develop RESTful APIs and web
              applications
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Working with databases such as MongoDB, MySQL, Microsoft SQL
              Server, PostgreSQL
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Using C# and .NET framework to develop APIs and web applications
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Using Ruby and Rails to develop RESTful APIs and web
              applications
            </p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Technical Writing</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Writing documentation for software projects</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Creating user manuals and tutorials</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Creating user manuals and tutorials</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
