import React from "react";
import "./reviews.css";
import reviewsimg from "../../assets/icons/reviews.png";
const Reviews = () => {
  const ReviewsList = [
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  const RenderReviews = ReviewsList.map((reviewstype) => {
    return (
      <div className="reviews_main">
        <img src={reviewstype.image} alt="image" />
        <p>{reviewstype.description}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="reviewsheading">
        <h1>REVIEWS</h1>
        <div className="reviewscards">{RenderReviews}</div>
      </div>
    </React.Fragment>
  );
};
export default Reviews;
