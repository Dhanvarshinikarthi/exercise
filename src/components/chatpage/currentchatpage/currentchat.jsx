import React from "react";
import "./currentchat.css";
import tick from "../../assets/icons/tick.png";
import send from "../../assets/icons/send.png";
const Currentchat = () => {
  return (
    <div className="currentchat">
      <div className="userprofile">
        <div className="user"></div>
        <div className="userbio">
          <img src={tick} alt="tick" />
          <h2>William cole</h2>
        </div>
        <p id="desgin">Artist,Motion,graphics</p>
        <p id="descrip">
          {" "}
          "Be the first to get one of the 100+ launch-NFTs in our newly launched
          Marketplace Betal Get Me Here"
        </p>
        <h4>2M Followers</h4>
        <div className="posts">
          <p>
            <b>43+</b>Posts
          </p>
          <button>Message</button>
        </div>
        <button id="request">Follow</button>
      </div>
      <div className="messagefield">
        <div className="mychat">
          <p>
            <b>
              Don’t think about making art, just get it done. Let everyone else
              decide if it’s good or bad, whether they love it or hate it. While
              they are deciding, make even more art.
            </b>
          </p>
        </div>
        <div className="oppchat">
          <p>
            I found I could say things with color and shapes that I couldn’t say
            any other way – things I had no words for.
          </p>
        </div>
        <div className="mychat">
          <p>
            <b>
              Imagination is the beginning of creation. You imagine what you
              desire, you will what you imagine, and at last, you create what
              you will.
            </b>
          </p>
        </div>
        <div className="messagebox">
          <input type="text" placeholder="Message" />
          <button>
            <img src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Currentchat;
