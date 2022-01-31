import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import HeaderContext from "../../context/HeaderContext";

export default function Hamburger() {
  const { opened, setOpenHamburger } = useContext(HeaderContext);
  return (
    <div
      className="header__hamburger"
      onClick={() => setOpenHamburger(!opened)}
    >
      {opened ? <GrClose /> : <FaBars />}
    </div>
  );
}
