import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image_wrapper">
        <button className="removeButton" onClick={props.removeCard}>
          X
        </button>
        <img
          src={`https://source.unsplash.com/500x400/?${props.name} `}
          alt={`${props.name} `}
        />{" "}
      </div>
      <div className="animal_info">
        <h2>{props.name[0].toUpperCase() + props.name.slice(1)}</h2>
        <div className="social_wrapper">
          <button onClick={props.removeLikes}> Remove </button>
          <p>{props.likes} &#9829;</p>
          <button onClick={props.addLikes}> Add like </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
