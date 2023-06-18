import React from "react";
import userimage from "../../assets/images/userimage.jpg";
import "./userprofile.css";
const Profile = () => {
  return (
    <div className="profilepage">
      <img src={userimage} alt="userimage" />
      <h2>DHANVARSHINI.K</h2>
      <h4>Web Developer</h4>
      <p id="para">Mathematics Student</p>
      <p>#Sketching</p>
      <p>Love Music</p>
      <h5>2M Followers</h5>
      <p>username@gmail.com</p>
      <button>Edit Profile</button>
    </div>
  );
};
export default Profile;
