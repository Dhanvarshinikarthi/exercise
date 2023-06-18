import React from "react";
import "./cards.css";
import userimage from "../../assets/images/userimage.jpg";
const Cards = () => {
  const Person = [
    {
      profileimage: userimage,
      Name: "DHANVARSHINI",
      Age: 22,
      Designation: "Web Developer",
      City: "Chennai",
      State: "Tamilnadu",
    },
    {
      profileimage: userimage,
      Name: "GAYATHRI DEVI",
      Age: 23,
      Designation: "Software Engineer",
      City: "Chennai",
      State: "Tamilnadu",
    },
    {
      profileimage: userimage,
      Name: "PRIYADHARSHINI",
      Age: 26,
      Designation: "Product Developer",
      City: "Chennai",
      State: "Tamilnadu",
    },
  ];
  const Renderperson = Person.map((personlist) => {
    return (
      <div className="profile_main">
        <img src={personlist.profileimage} alt="profile" />
        <h2>{personlist.Name}</h2>
        <h4>{personlist.Age}</h4>
        <h4>{personlist.Designation}</h4>
        <p>{personlist.City}</p>
        <p>{personlist.State}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      {" "}
      <div className="cards">{Renderperson}</div>
    </React.Fragment>
  );
};

export default Cards;
