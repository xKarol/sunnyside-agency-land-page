import React from "react";
import HeaderImage from "../assets/desktop/image-header.jpg";
import Logo from "./Logo.js";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header__image" src={HeaderImage} alt="" />
        <div className="header__heading">
          <div className="details">
            <h1>We are creatives</h1>
            <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#FFF"
                strokeWidth="6"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 3v100M3 95.484l15 15 15-15" />
              </g>
            </svg>
          </div>
        </div>
        <div className="header__nav-bar">
          <div className="header__nav">
            <Logo />
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
