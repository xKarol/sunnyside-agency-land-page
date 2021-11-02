import React from "react";
import HeaderImage from "../assets/desktop/image-header.jpg";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header__image" src={HeaderImage} alt="" />
        <div className="header__nav-bar">
          <div className="header__nav">
            <img src={Logo} alt="" />
            <nav className="header__nav-links">
              <a href="/">About</a>
              <a href="/">Services</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
