import React from "react";
import Logo from "./Logo.js";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Logo fill="hsl(168, 34%, 41%)" />
        <div className="footer__links">
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
        </div>
        <div className="footer__socials">
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Pinterest />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Facebook = styled(FaFacebookSquare)`
  color: hsl(168, 34%, 41%);
`;
const Instagram = styled(FaInstagram)`
  color: hsl(168, 34%, 41%);
`;
const Twitter = styled(FaTwitter)`
  color: hsl(168, 34%, 41%);
`;
const Pinterest = styled(FaPinterest)`
  color: hsl(168, 34%, 41%);
`;
