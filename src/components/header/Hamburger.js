import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import HeaderContext from "../../context/HeaderContext";

export default function Hamburger() {
  const { opened, setOpenHamburger } = useContext(HeaderContext);
  return (
    <button
      className="header__hamburger"
      onClick={() => setOpenHamburger(!opened)}
      aria-label="hamburger-menu"
    >
      {opened ? <GrClose /> : <FaBars />}
    </button>
  );
}
