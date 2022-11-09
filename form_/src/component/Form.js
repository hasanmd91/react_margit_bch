import React from "react";

const form = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.onsubmit}>
        <div className="formfield">
          <label name="firstname">Firstname</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            required="require"
            onChange={props.inputhandeler}
          />
        </div>
        <div className="formfield">
          <label name="lastname"> Lastname:</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            required="require"
            onChange={props.inputhandeler}
          />
        </div>
        <div className="formfield">
          <label name="phonenumber"> Phone number:</label>
          <input
            id="phonenumber"
            name="phonenumber"
            type="number"
            required="require"
            onChange={props.inputhandeler}
          />
        </div>
        <div className="formfield">
          <label name="message"> Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            onChange={props.inputhandeler}
          />
        </div>
        <div className="formfield">
          <label name="role"> Role:</label>
          <select
            id="role"
            name="role"
            type="select"
            required="require"
            onChange={props.inputhandeler}
          >
            {" "}
            <option name="teacher"> Teacher </option>
            <option name="student"> Student</option>
            <option name="parents"> Parents</option>
          </select>
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
};

export default form;
