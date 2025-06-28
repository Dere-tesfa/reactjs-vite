import React, { useState } from "react";

const Change = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const changeText = (event) => {
    setName(event.target.value);
  };

  const textarea = (e) => {
    setText(e.target.value);
    setCount(count + 1);
  };
  return (
    <div>
      <input
        onChange={changeText}
        type="text"
        placeholder="enter text"
        className="mt-3"
        style={{ border: "1px solid black" }}
      ></input>
      <h1>text:{name}</h1>
      <textarea
        onChange={textarea}
        style={{ border: "1px solid black", width: 500 }}
      ></textarea>
      <h2>Text:{text}</h2>
      <p>{count}</p>
    </div>
  );
};

export default Change;
