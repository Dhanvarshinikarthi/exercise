import React from "react";
import "./education.css";
import education from "../../assets/icons/education.png";
const Education = () => {
  const educationdetails = [
    {
      Year: "2014 - 2015",
      course: "SSLC",
      eduqualification: "N.D.H.S School",
      percentage: "92%",
    },
    {
      Year: "2016 - 2017",
      course: "HSC",
      eduqualification: "N.D.H.S School",
      percentage: "83%",
    },
    {
      Year: "2017 - 2020",
      course: "B.SC.,(Mathematics)",
      eduqualification: "MCC",
      percentage: "84%",
    },
    {
      Year: "2020 - 2022",
      course: "M.SC.,(Mathematics)",
      eduqualification: "GNC",
      percentage: "95%",
    },
  ];
  const Rendereducation = educationdetails.map((educationlist) => {
    return (
      <div className="education_main">
        <div className="graduation">
          <img src={education} alt="education" />
        </div>
        <div className="eduinfo">
          <h2>{educationlist.Year}</h2>
          <h4>{educationlist.course}</h4>
          <p>
            <b>{educationlist.eduqualification}</b>
          </p>
          <p>
            <b> Percentage: {educationlist.percentage}</b>
          </p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="cards_main">
        <h1>EDUCATION</h1>
        <div className="cards">{Rendereducation}</div>
      </div>
    </React.Fragment>
  );
};
export default Education;
