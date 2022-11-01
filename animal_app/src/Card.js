import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image_wrapper">
        <img
          src={`https://source.unsplash.com/500x400/?${props.name} alt=${props.name}`}
        />{" "}
      </div>
      <div className="animal_info">
        <h2>{props.name}</h2>
        <div className="social_wrapper">
          <p>0 &#9829;</p>
          <button> Add like </button>
        </div>
      </div>
    </div>
  );
};

export default Card;