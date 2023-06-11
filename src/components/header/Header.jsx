import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import logo from "../../assets/SCDO.svg";
import video from "../../assets/imporrt.mp4";

const Header = () => {
  return (
    <header id="home">
      <video className="background_video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container header_container">
        <img className="logo" src={logo} alt="logo" />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
