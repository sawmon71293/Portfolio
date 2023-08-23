import './header.css';
import CTA from './CTA';
import ME from '../../assets/sawmon.gif';
import HeaderSocials from './HeaderSocials';
import spaceImage from '../../assets/spaceship.png';

const Header = () => (

  <header>
    <div className="container header__container" id="header">
      <img src={spaceImage} className="space-image" alt="Yellow Space Ship" />
      <h5 style={{ fontFamily: "'Poiret One', cursive", marginBottom: '-10px', fontSize: '16px' }}>Hello I&apos;m</h5>
      <h1 className="user-name">Saw Mon</h1>
      <h5 className="text-light">Full-Stack Engineer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img
          className="me-img"
          src={ME}
          alt="me"
        />
      </div>
      <a
        href="#contact"
        className="scroll__down"
      >
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
