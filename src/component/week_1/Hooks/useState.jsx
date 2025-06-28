import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="w-48 p-2 border border-b-green-500 m-9 shadow-orange-600">
      <h1 className="w-10 text-center border rounded-full ml-14 border-x-gray-700">
        {count}
      </h1>
      <div className="p-2">
        <button
          className="p-1 mr-3 text-white bg-blue-500 rounded-lg"
          onClick={increase}
        >
          Increase
        </button>
        <button
          className="p-1 text-white bg-blue-500 rounded-lg"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default State;
