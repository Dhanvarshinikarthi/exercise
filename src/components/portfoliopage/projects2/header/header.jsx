import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="newsfeed_header">
      <h1>
        <span>My</span>PortFolio
      </h1>
      <nav>
        <a id="home">Overview</a>
        <a>Portfolio</a>
        <a>Certification</a>
      </nav>
      <button>
        <h4>Hire Me</h4>
      </button>
    </div>
  );
};
export default Header;
