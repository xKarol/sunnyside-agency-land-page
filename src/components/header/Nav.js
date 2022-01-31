import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import NavLink from "./NavLink";

export default function Nav() {
  const { opened } = useContext(HeaderContext);

  return (
    <nav className={`header__nav ${opened ? "hamburger" : null}`}>
      <NavLink text={"About"} />
      <NavLink text={"Services"} />
      <NavLink text={"Projects"} />
      <NavLink text={"Contact"} />
    </nav>
  );
}
