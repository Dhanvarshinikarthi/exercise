import React from "react";
import accountimage from "../assets/images/accountimage.jpg";
import cancel from "../assets/images/cancel.png";
import "./createaccount.css";
const Createaccount = (props) => {
  return props.trigger ? (
    <div className="accountclose">
      <div className="createaccount">
        <div className="accountimage">
          <img src={accountimage} alt="accountimage" />
        </div>
        <div className="newaccount">
          <div className="accountname">
            <h2>Create new account</h2>
            <form>
              <div className="name">
                <input type="text" placeholder="FirstName" required />
                <input type="text" placeholder="Surname" required />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <div className="password">
                <input type="password" placeholder="Enter password" required />
                <input
                  type="password"
                  placeholder="Re-enter password"
                  required
                />
              </div>
              <input type="date" required />
              <div className="gender">
                <label id="title">
                  <b>Gender</b>
                </label>
                <input type="radio" name="gender" required />
                <label>Female</label>
                <input type="radio" name="gender" required />
                <label>Male</label>
                <input type="radio" name="gender" required />
                <label>Custom</label>
              </div>
              <button>Create Account</button>
            </form>
          </div>
        </div>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={cancel} alt="cancel" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Createaccount;
