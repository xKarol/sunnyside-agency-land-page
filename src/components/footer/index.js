import Logo from "../Logo";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo fill="hsl(168, 34%, 41%)" />
        <Nav />
        <Socials />
        <span>
          Challenge by
          <a href="https://www.frontendmentor.io/home"> Frontend Mentor</a>.
          Coded by <a href="https://github.com/xKarol">Karol</a>
        </span>
      </footer>
    </>
  );
}
