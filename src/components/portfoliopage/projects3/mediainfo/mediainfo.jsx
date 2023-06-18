import React from "react";
import "./mediainfo.css";
import mediaimg1 from "../../../assets/images/mediaimg1.jpg";
import mediaimg2 from "../../../assets/images/mediaimg2.png";
const Mediainfo = () => {
  return (
    <div className="mediainfo_main">
      <h1>SOCIAL MEDIA CARDS</h1>
      <div className="about_media">
        <h3>ABOUT</h3>
        <p>
          <b>
            A front-end web developer is responsible for a website's appearance.
            They make the website's layout and integrate applications, graphics,
            and other content. In certain cases, a front-end developer could
            also write content for the site.
            <br />
            Frontend development, also known as UI development, refers to
            creating web user interfaces, the parts of the application that the
            user sees and interacts with. Frontend development stands firmly on
            three pillars: HTML for markup, CSS for styling and JavaScript for
            logic and interactions.
          </b>
        </p>
        <div className="mediaimg">
          <img src={mediaimg1} alt="media" />
          <img src={mediaimg2} alt="media" />
        </div>
      </div>
      <button>Open Page</button>
    </div>
  );
};
export default Mediainfo;
