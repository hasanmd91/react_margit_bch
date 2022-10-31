import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="calculator">
      <div className="circle">
        {" "}
        <p> {count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 5)}> Add five </button>
        <button onClick={() => setCount(count + 1)}> Add one </button>
        <button onClick={() => setCount(0)}> Reset</button>
        <button onClick={() => setCount(count - 1)}> Remove one </button>
        <button onClick={() => setCount(count - 5)}> Remove five </button>
      </div>
    </div>
  );
};

export default App;
