import { useEffect, useState } from "react";
import Logo from "../Logo.js";
import Nav from "./Nav.js";
import Hamburger from "./Hamburger.js";
import HeaderContext from "../../context/HeaderContext.js";

export default function Header() {
  const [opened, setOpenHamburger] = useState(false);

  useEffect(() => {
    if (opened) {
      window.scrollTo(0, 0);
      document.body.classList.add("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [opened]);

  return (
    <HeaderContext.Provider value={{ opened, setOpenHamburger }}>
      <header className="header">
        <Logo />
        <Nav />
        <Hamburger />
      </header>
    </HeaderContext.Provider>
  );
}
