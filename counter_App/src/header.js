import React from "react";

const header = (props) => {
  const { text } = props;
  return (
    <div className="header">
      <h1> {text}</h1>
    </div>
  );
};

export default header;
