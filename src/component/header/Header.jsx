import './header.css';
import CTA from './CTA';
import ME from '../../assets/me-3.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header__container" id="header">
      <h5> Hello I&apos;m</h5>
      <h1>Saw Mon</h1>
      <h5 className="text-light">Fullstack Engineer</h5>
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
