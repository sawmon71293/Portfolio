import './about.css';
import { TbAwardFilled } from 'react-icons/tb';
import { BsPersonWorkspace } from 'react-icons/bs';
import ME from '../../assets/myAvatar.png';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img
            src={ME}
            alt="Saw Mon Han"
          />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <TbAwardFilled className="about_icon" />
            <h5>Experience</h5>
            <small>7 months as a Junior SE</small>
          </article>
          <article className="about__card">
            <BsPersonWorkspace className="about_icon" />
            <h5>Remote Programming</h5>
            <small>1000+ hours of training</small>
          </article>
          <article className="about__card">
            <TbAwardFilled className="about_icon" />
            <h5>Projects</h5>
            <small>50+ hands-on projects</small>
          </article>
        </div>
        <p>
          Greetings! I&apos;m Saw Mon Han, a dedicated full-stack developer
          of one year experience currently
          undergoing training at Microverse, a renowned online school that
          specializes in remote pair programming. With a strong passion for
          coding, I have honed my skills in React, Ruby, and database
          technologies through hands-on projects that replicate real-world
          scenarios. During my previous experience as a junior full-stack
          developer at a local company, I gained valuable insights into the
          importance of discipline, hard work, and effective communication in
          achieving project goals. I developed programming logic skills using
          Java and successfully created an online learning platform using Spring
          Boot and Spring Data JPA. Additionally, I was entrusted with the
          responsibility of developing the company&apos;s Job Agency Office
          Automation System using C# and the Dot Net Core framework with
          Microsoft SQL Server as the database. Let&apos;s connect and discuss how I
          can bring my technical expertise and enthusiasm to contribute to your
          team&apos;s goals!
        </p>
        <a
          href="#contact"
          className="btn btn-primary"
        >
          Let&apos;s Talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
