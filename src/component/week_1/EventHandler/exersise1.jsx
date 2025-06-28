import React, { useState } from "react";

const Exersise1 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
    setCount(count + 1);
  };

  const resets = () => {
    setCount(0);
    setText("");
  };
  const deletes = (e) => {
    if (e.key === "Backspace" && text.length > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-2/4 p-10 m-20 bg-teal-400 border border-indigo-600 rounded-lg">
      <h1 className="float-right pt-2 mt-2 mb-2 font-bold text-center text-white bg-gray-800 border border-pink-600 rounded-full size-11 ">
        {count}
      </h1>
      <div>
        <textarea
          className="p-2 font-mono rounded-lg outline-red-600"
          style={{
            border: "1px solid black",
            width: "100%",
          }}
          value={text}
          onChange={changeText}
          onKeyDown={deletes}
        ></textarea>
      </div>
      <button
        onClick={resets}
        className="p-2 font-bold text-white bg-blue-500 rounded-lg"
      >
        reset
      </button>
    </div>
  );
};

export default Exersise1;
