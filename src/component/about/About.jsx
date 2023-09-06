import { BsPersonWorkspace } from 'react-icons/bs';
import { TbAwardFilled } from 'react-icons/tb';
import './about.css';

const About = () => (
  <section id="about">
    <h5 style={{ marginBottom: '-10px', fontFamily: "'Poiret One', cursive" }}>Get To Know</h5>
    <h2 style={{ fontSize: '30px', fontFamily: "'Black Ops One', cursive", color: 'white' }}>About Me</h2>

    <div className="container about__container">

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <TbAwardFilled className="about_icon" />
            <h5>Experience</h5>
            <small>Over 1 year as a Junior SE</small>
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
        <p className="info-paragraph">
          Greetings, fellow tech enthusiasts! I am Saw Mon Han, a trailblazing
          full-stack developer on an exhilarating
          journey with Microverse, the cutting-edge online school
          that takes remote pair programming to new heights.
          My coding adventures have been nothing short of thrilling,
          fueled by my passion for creating exceptional digital
          experiences using a wide array of technologies like React,
          Ruby, and the captivating world of databases.

          But here&apos;s the twist—I&apos;m not just a coding wizard.
          I&apos;m also a fun-loving and supportive
          team member who believes in fostering a positive and
          collaborative environment with my coding partners.
          When we embark on our programming quests together,
          we&apos;ll not only conquer challenges but also create
          lasting connections and share a few laughs along
          the way. After all, coding is not just about building
          great software—it&apos;s about building great relationships too!

          Now, let me share a couple of my passions beyond the realm of coding.
          When I&apos;m not weaving lines of code, you&apos;ll
          often find me strumming the strings of my trusty guitar,
          channeling my creativity into soulful melodies.
          Music has always been my companion, infusing joy
          and inspiration into every aspect of my life.

          Oh, and did I mention that I&apos;m an amateur chess player?
          I find immense joy in the strategic dance of kings
          and queens on the checkered battlefield.
          Chess fuels my analytical mind, teaching me to think
          several moves ahead and approach problem-solving with a fresh perspective.

          So, if you&apos;re seeking not just a skilled developer
          but also a team member who brings a vibrant spirit, camaraderie,
          and a touch of musical magic, look no further.
          Let&apos;s join forces,
          unlock new dimensions of success, and
          create a symphony of technological triumphs together.
          Connect with me today, and let&apos;s script our own
          epic tale of innovation and camaraderie!
        </p>
        <a
          style={{ textAlign: 'center' }}
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
