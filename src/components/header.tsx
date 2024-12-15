
import React from "react";
import { MdMenu } from "react-icons/md";
import "../style/header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        {/* Left Section */}
        <div className="left">Iqra&apos;s Portfolio</div>
        {/* Right Section */}
        <div className="header-right-div">
          <ul className="header-links">
            <li className="menuelink"><a href="/">Home</a></li>
            <li className="menuelink"><a href="/about">About</a></li>
            <li className="menuelink"><a href="/services">Services</a></li>
            <li className="menuelink"><a href="/projects">Projects</a></li>
            <li className="heigher-btn"><a href="/contact">Contact Me</a></li>
          </ul>
          <MdMenu className="menu-btn" />
        </div>
      </div>
    </nav>
  );
};

export default Header;