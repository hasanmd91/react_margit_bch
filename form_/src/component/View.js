import React from "react";

const view = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="view">
      <div>
        <p> Firstname:{firstname} </p>
        <p> Lastname:{lastname} </p>
        <p> Phonenumber:{phonenumber} </p>
        <p> Message: {message}</p>
        <p> Role:{role} </p>
      </div>
    </div>
  );
};

export default view;
