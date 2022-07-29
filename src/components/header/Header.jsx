import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assests/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Usman Asif</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
