import React, { useEffect, useState } from "react";
import accountimage from "../assets/images/accountimage.jpg";
import "./signin.css";

const Signin = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [errorValue, setErrorValue] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValue(validate(formValues));
    setSubmitting(true);
  };
  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      errors.email = "please enter email";
    } else if (!regex.test(value.email)) {
      errors.email = "invalid mail format";
    }
    if (!value.password) {
      errors.password = "please enter password";
    } else if (value.password.length < 5) {
      errors.password = "must enter more than 5 characters";
    } else if (value.password.length > 12) {
      errors.password = "must enter less than 12 characters";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(errorValue).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [errorValue]);
  return (
    <div className="signinpage">
      <div className="signinimg">
        <img src={accountimage} alt="accountimage" />
      </div>
      <div className="signinaccount">
        <h3>Signin to your account</h3>
        <div className="info">
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              required
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{errorValue.email}</p>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{errorValue.password}</p>
            <button>Login</button>
          </form>
          {Object.keys(errorValue).length === 0 && submitting && (
            <span className="success"> Login Successively </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Signin;
