import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [datas, setdata] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        setdata(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = datas.map((data) => {
    return (
      <p>
        <h6>{data.id}</h6>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </p>
    );
  });

  return <div className="App">{arr}</div>;
};

export default App;
