import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

const Services = () => (
  <section id="services">
    <h5 style={{ marginBottom: '-5px', fontFamily: "'Poiret One', cursive" }}>What I Offer</h5>
    <h2 style={{ fontSize: '30px', fontFamily: "'Black Ops One', cursive", color: 'white' }}>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Frontend Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Creating static websites with HTML, CSS, and JavaScript, Bootstrap</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Building responsive front-end applications using React, Vue (Nuxt 3).
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Design customize icons and motion graphic (2D animation).
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
              Utilized Java, Node.js, and C# with their respective frameworks (Spring Boot, Fastify, and .NET Core) to develop backend services.
            </p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Working with databases such as  Microsoft SQL
              Server, MySQL, Postgres.
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

        </ul>
      </article>
    </div>
  </section>
);

export default Services;
