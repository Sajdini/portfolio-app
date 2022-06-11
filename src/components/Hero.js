import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Welcome to my web portfolio</h1>
        <Typed
          className="typed-text"
          strings={["Samir Ajdini", "An entry level programmer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="footer" className="btn-main-offer">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
