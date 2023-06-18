import React from "react";
import "./newsfeedpage.css";
import newsfeedimg1 from "../../../assets/images/newsfeed1.jpg";
import newsfeedimg2 from "../../../assets/images/newsfeed2.jpg";
const Newsfeedpage = () => {
  return (
    <div className="newsfeedpage_main">
      <h1>NEWS FEED PROFILE</h1>
      <div className="about_newsfeed">
        <h3>ABOUT</h3>
        <p>
          <b>
            An online newsfeed is a list where news is provided on a regular
            basis to a wide audience showcasing the latest online news and
            updates. Engagement is created by users being able to subscribe and
            follow specific sources of interest.
            <br />
            Newsfeeds are very beneficial to users as without, the users would
            have to browse the internet, looking at multiple sites in order to
            find the news they are specifically interested in. However, a
            singular news feed that contains lots of content from a variety of
            news sources will save the user time from searching to spend more
            time engaging with relevant content.
          </b>
        </p>
        <div className="newsimg">
          <img src={newsfeedimg1} alt="news" />
          <img src={newsfeedimg2} alt="news" />
        </div>
      </div>
      <button>Open Page</button>
    </div>
  );
};
export default Newsfeedpage;
