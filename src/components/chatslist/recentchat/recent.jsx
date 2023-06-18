import React from "react";
import "./recent.css";
import williamimg from "../../assets/images/william.jpg";
import jordanimg from "../../assets/images/jordan.jpg";
import harryimg from "../../assets/images/harry.jpg";
import picassoimg from "../../assets/images/picasso.jpg";
import vermeerimg from "../../assets/images/vermeer.jpg";
import leonardoimg from "../../assets/images/leonardo.jpg";
const Recentchat = () => {
  const Chat = [
    {
      image: williamimg,
      Name: "William cole",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
    {
      image: jordanimg,
      Name: "Jordan peter",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
    {
      image: harryimg,
      Name: "HarryEdwar",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
    {
      image: picassoimg,
      Name: "PabloPicasso",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
    {
      image: vermeerimg,
      Name: " JohnVermeer",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
    {
      image: leonardoimg,
      Name: "Leonardo di",
      desgination: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tellus ut lacinia...",
    },
  ];
  const Renderchat = Chat.map((chatlist) => {
    return (
      <div className="recent_main">
        <img src={chatlist.image} alt="image" />
        <div className="recent">
          <div className="profile">
            <div className="bio">
              <h2>{chatlist.Name}</h2>
            </div>
            <h5>{chatlist.desgination}</h5>
          </div>
          <p>{chatlist.description}</p>
          <hr />
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="cards_main">
        <h1>Recent chats</h1>
        <div className="cards">{Renderchat}</div>
      </div>
    </React.Fragment>
  );
};
export default Recentchat;
