import Logo from "./Logo.js";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

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
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaPinterest />
          </a>
        </div>
        <span>
          Challenge by
          <a href="https://www.frontendmentor.io/home"> Frontend Mentor</a>.
          Coded by <a href="https://github.com/xKarol">Karol</a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
