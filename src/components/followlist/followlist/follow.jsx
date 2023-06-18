import React from "react";
import "./follow.css";
import tick from "../../assets/icons/tick.png";
import follow from "../../assets/icons/follow.png";
const Follow = () => {
  const Followlist = [
    {
      icon: "tick",
      Name: "William",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
    {
      icon: "tick",
      Name: "Jordan",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
    {
      icon: "tick",
      Name: "Harry",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
    {
      icon: "tick",
      Name: "Picasso",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
    {
      icon: "tick",
      Name: "Vermeer",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
    {
      user: "",
      icon: "tick",
      Name: "Leonardo",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      request: "Follow",
    },
  ];
  const Renderfollow = Followlist.map((followtype) => {
    return (
      <div className="follow_main">
        <div className="user"></div>
        <div className="profilepage">
          <div className="profile_main">
            <div className="profile">
              <img src={tick} alt="tick" />
              <h2>{followtype.Name}</h2>
            </div>
            <p id="followers">{followtype.Followers}</p>
          </div>
          <p>{followtype.bio}</p>
          <div className="followcards">
            <div className="text">
              <button id="message">{followtype.chats}</button>
            </div>
            <button id="accept">{followtype.request}</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="cards_main">
        <div className="heading">
          <img src={follow} alt="follow" />
          <h1>FOLLOW</h1>
        </div>

        <div className="cards">{Renderfollow}</div>
      </div>
    </React.Fragment>
  );
};
export default Follow;
