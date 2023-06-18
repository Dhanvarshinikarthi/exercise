import React, { useEffect, useState } from "react";
import accountimage from "../assets/images/accountimage.jpg";
import "./createaccount.css";

const Createaccount = () => {
  const initialValue = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
    rreenterpassword: "",
    dateofbirth: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [errorValues, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "name required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "name must be more than 3 characters";
    }
    if (!values.surname) {
      errors.surname = "name required";
    } else if (values.surname > 3) {
      errors.surname = " name must be more than 3 characters";
    }
    if (!values.email) {
      errors.email = "mail required";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid mail format";
    }
    if (!values.password) {
      errors.password = "password required";
    } else if (values.password.length < 8) {
      errors.password = "password must be more than 8 characters";
    } else if (values.password.length > 16) {
      errors.password = "password must be less than 16 characters";
    }
    if (!values.reenterpassword) {
      errors.reenterpassword = "re-enter password";
    } else if (values.reenterpassword !== values.password) {
      errors.reenterpassword = "password doesnot match";
    }

    if (!values.dateofbirth) {
      errors.dateofbirth = "dob required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(errorValues).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [errorValues]);
  return (
    <div className="createaccount">
      <div className="accountimage">
        <img src={accountimage} alt="accountimage" />
      </div>
      <div className="newaccount">
        <div className="accountname">
          <h2>Create new account</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="name">
              <input
                type="text"
                name="firstname"
                placeholder="FirstName"
                required
                value={formValues.firstname}
                onChange={handleChange}
              />
              <p>{errorValues.firstname}</p>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required
                value={formValues.surname}
                onChange={handleChange}
              />
              <p>{errorValues.surname}</p>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p>{errorValues.email}</p>
            <div className="password">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={formValues.password}
                onChange={handleChange}
              />
              <p>{errorValues.password}</p>
              <input
                type="password"
                name="reenterpassword"
                placeholder="Re-enter password"
                required
                value={formValues.reenterpassword}
                onChange={handleChange}
              />
              <p>{errorValues.reenterpassword}</p>
            </div>
            <input
              type="date"
              name="dateofbirth"
              required
              value={formValues.dateofbirth}
              onChange={handleChange}
            />
            <p>{errorValues.dateofbirth}</p>
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
          {Object.keys(errorValues).length === 0 && submitting && (
            <span className="success">Registered Successfully</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Createaccount;
