import React from "react";
import "./page_info.css";
import landingimage1 from "../../../assets/images/landingimg1.jpg";
import landingimage2 from "../../../assets/images/landingimg2.jpg";
const MediaLander = () => {
  return (
    <div className="medialander_main">
      <h1>MEDIA LANDER</h1>
      <div className="about_medialander">
        <h3>ABOUT</h3>
        <p>
          <b>
            A Landing page is a standalone web page that a person lands on after
            clicking through fron an email,ad,or other digital location.Every
            content strategy should include the use of landing pages to convert
            more traffic and increase conversions.
            <br />
            The most essential element of a landing page is the CTA. A
            successful landing page should have one value proposition, one clear
            message, and one dominant CTA. While there may be pages with a
            combination of CTAs displayed, design and layout should promote one
            “macro conversion” as the most important for user attention.
          </b>
        </p>
        <div className="landingimage">
          <img src={landingimage1} alt="landing1" />
          <img src={landingimage2} alt="landing2" />
        </div>
      </div>
      <button>Open Page</button>
    </div>
  );
};
export default MediaLander;
