import './footer.css';
import { CiFacebook } from 'react-icons/ci';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => (
  <footer>
    <a
      href="https://github.com/sawmon71293"
      className="footer__logo"
    >
      Saw Mon
    </a>
    <ul className="permalinks">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.facebook.com/saw.mon.372661">
        <CiFacebook />
      </a>
      <a href="https://twitter.com/sawmonhan">
        <FiTwitter />
      </a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Saw Mon. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
