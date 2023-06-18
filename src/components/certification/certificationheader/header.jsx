import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_main">
      <h1>
        <span>My</span>PortFolio
      </h1>
      <nav>
        <a href="#" id="home">
          Overview
        </a>
        <a href="#">Portfolio</a>
        <a href="#">Certification</a>
      </nav>
      <button>
        <h4>Hire Me</h4>
      </button>
    </div>
  );
};
export default Header;
