import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Socials() {
  return (
    <section className="footer__socials">
      <a href="/" aria-label="facebook link">
        <FaFacebookSquare />
      </a>
      <a href="/" aria-label="instagram link">
        <FaInstagram />
      </a>
      <a href="/" aria-label="twitter link">
        <FaTwitter />
      </a>
      <a href="/" aria-label="pinterest link">
        <FaPinterest />
      </a>
    </section>
  );
}
