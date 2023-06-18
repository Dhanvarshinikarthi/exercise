import React, { useReducer, useState } from "react";
import "./newsfeed.css";
import profile from "../../assets/images/profile.png";
import likes from "../../assets/icons/favourite.png";
import tweet from "../../assets/icons/retweet.png";
// // const initialState = 0;
// // const reducer = (state, action) => {
// //   switch (action) {
// //     case "increment":
// //       return state + 1;
// //     case "decrement":
// //       return state - 1;
// //     default:
// //       state;
// //   }
// };
const Newsfeed = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => setCount(count + 1);
  // const [initial, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="newsfeed_main">
      <div className="header_main">
        <div className="myprofile">
          <img src={profile} alt="profile" />
          <p>
            <span>
              <b>Reymond gale</b>
            </span>
            @ reygale
            <p>Motion artist,MGX</p>
          </p>
        </div>
        <button>Viral</button>
      </div>
      <div className="heropage"></div>
      <div className="bio">
        <div className="description">
          <h5>NFT photography peak time in george town</h5>
          <p>
            Be the first to get one of the 100+ launch-NFTs in our newly
            launched Marketplace Beta! Get Me Here...
          </p>
        </div>
        <div className="views">
          <p>2 Mins ago</p>
          <p>
            <span>
              <b>93</b>
            </span>
            Views
          </p>
        </div>
      </div>
      <div className="posts">
        <div className="reactions">
          <div className="like">
            <button onClick={handleChange}>
              <img src={likes} alt="likes" />
            </button>
            <p>
              <b>{count}</b>Like
            </p>
          </div>

          <div className="tweet">
            <button>
              <img src={tweet} alt="tweet" />
            </button>
            <p>
              <b>{23}</b>Tweet
            </p>
          </div>
        </div>
        <button id="add">Add Tweet</button>
      </div>
    </div>
  );
};
export default Newsfeed;
