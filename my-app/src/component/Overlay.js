import React from "react";

const overlay = ({
  firstname,
  lastname,
  phonenumber,
  message,
  role,
  remOverlay,
  sentMessage,
}) => {
  return (
    <div className="overlay">
      <div>
        <div>
          <p> Firstname: {firstname} </p>
          <p> Lastname: {lastname} </p>
          <p> Phonenumber: {phonenumber}</p>
          <p> Message: {message}</p>
          <p> Role: {role}</p>
        </div>
        <div>
          <button onClick={sentMessage}> Are you sure ?</button>
          <button onClick={remOverlay}> Dont sent the message </button>
        </div>
      </div>
    </div>
  );
};

export default overlay;
