import React from "react";
import accountimage from "../assets/images/accountimage.jpg";
import closebutton from "../assets/images/cancel.png";
import "./signin.css";
const Signin = (props) => {
  return props.trigger ? (
    <div className="signinclose">
      <div className="signinpage">
        <div className="signinimg">
          <img src={accountimage} alt="accountimage" />
        </div>
        <div className="signinaccount">
          <h3>Signin to your account</h3>
          <div className="info">
            <form>
              <input type="email" placeholder="Enter E-mail" required />
              <input type="password" placeholder="Enter password" required />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
      <button id="close" onClick={() => props.setTrigger(false)}>
        <img src={closebutton} alt="closebutton" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Signin;
