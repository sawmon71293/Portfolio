import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => (
  <section id="experience">
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML5</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS3</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Tailwind CSS</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Material UI</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>

        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Java</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Spring Boot</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>SpringMVC</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MySQL</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>C#</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Dot Net Core 3.1</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Microsoft SQL Server</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
