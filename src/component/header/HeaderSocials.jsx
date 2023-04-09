import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => (
  <div className="header__socials">
    <a
      href="https://www.linkedin.com/in/saw-mon-han/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a
      href="https://github.com/sawmon71293"
      target="_blank"
      rel="noreferrer"
    >
      <BsGithub />
    </a>
    <a
      href="https://twitter.com/sawmonhan"
      target="_blank"
      rel="noreferrer"
    >
      <BsTwitter />
    </a>
  </div>
);

export default HeaderSocials;
