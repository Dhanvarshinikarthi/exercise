import React, { useState } from "react";
import landerimage from "../assets/images/landerimage.jpeg";
import "./lander.css";
import Createaccount from "./createaccount";
import Signin from "./signin";
const Lander = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  return (
    <div className="lander_main">
      <div className="landerpage">
        <h1>Welcome!</h1>
        <p>Get Connected</p>
        <img src={landerimage} alt="landerimage" />
      </div>
      <div className="networkpage">
        <h3>Social Network</h3>
        <p>A friendly connection with people allover the world!</p>
        <button onClick={() => setSigninOpen(true)}>Login</button>
        <h4>OR</h4>
        <p>Don't have an account?Sign up now</p>
        <button onClick={() => setAccountOpen(true)}>Signup</button>
      </div>
      <Createaccount trigger={accountOpen} setTrigger={setAccountOpen} />
      <Signin trigger={signinOpen} setTrigger={setSigninOpen} />
    </div>
  );
};
export default Lander;
