import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5 style={{ marginBottom: '-5px', fontFamily: "'Poiret One', cursive" }}>What Skills I have</h5>
    <h2 style={{ fontSize: '30px', fontFamily: "'Black Ops One', cursive", color: 'white' }}>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3 style={{ color: '#f9f9f9', fontWeight: '700' }}>Frontend Development</h3>
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
              <h4>Vue</h4>
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
        <h3 style={{ color: '#f9f9f9', fontWeight: '700' }}>Backend Development</h3>
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
              <h4>C#</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Dot Net Core</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PHP</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Laravel</h4>
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
              <h4>Postgres</h4>
              <small className="text-align">Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
