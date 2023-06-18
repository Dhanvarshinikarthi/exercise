import React from "react";
import "./mainprojects.css";
import medialander from "../../assets/images/medialanderimg.jpg";
import newsfeedprofile from "../../assets/images/newsfeedprofileimage.jpg";
import socialmediacards from "../../assets/images/socialmediacardsimage.jpg";
import { Link } from "react-router-dom";
const MainProjects = () => {
  return (
    <div className="projects_list">
      <h1>MY PROJECTS</h1>
      <div className="projects_type">
        <div className="container">
          <img src={medialander} alt="medialander" id="news" />
          <div className="middle">
            <div className="text">
              <h5>
                Media<span> L</span> ander
              </h5>
            </div>
            <Link to="/medialander">
              <b>View Page</b>
            </Link>
          </div>
        </div>

        <div className="container">
          <img src={newsfeedprofile} alt="newsfeed" id="news" />
          <div className="middle">
            <div className="text">
              <h5>
                News <span>F</span>eed <span>P</span>rofile
              </h5>
            </div>
            <Link to="/newsfeedprofile">
              <b>View Page</b>
            </Link>
          </div>
        </div>

        <div className="container">
          <img src={socialmediacards} alt="socialmediacards" />
          <div className="middle">
            <div className="text">
              <h5>
                Social <span>M</span>edia <span>C</span>ards
              </h5>
            </div>
            <Link to="/socialmedia">
              <b>View Page</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProjects;
