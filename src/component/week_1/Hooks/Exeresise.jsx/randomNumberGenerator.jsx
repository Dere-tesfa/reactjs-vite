import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));

  const randomNumber = () => {
    setRandom(() => Math.floor(Math.random() * 100));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="p-6 bg-green-700 rounded-lg">
        <h1
          style={{
            border: "1px solid red",
            borderRadius: "50%",
            width: "50px",
            background: "white",
            height: "50px",
            fontSize: "28px",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
            marginLeft: "5rem",
          }}
        >
          {random}
        </h1>
        <button
          onClick={randomNumber}
          className="p-1 font-bold bg-green-400 rounded-lg "
        >
          RandomNumberGenerator
        </button>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
