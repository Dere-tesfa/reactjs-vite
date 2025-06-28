import React from "react";
//click event is an interaction when a user clicks on aspesfic element.
// we can respond to clicks by passing
const Click = () => {
  const click = () => {
    alert("Thank you for click here!");
  };
  const clickName = () => {
    console.log(" dere stop clik me");
  };

  return (
    <div>
      <button onClick={click} className="p-4 m-4 bg-blue-700">
        Click
      </button>
      <button onClick={clickName} className="p-4 m-4 bg-red-700">
        start
      </button>
    </div>
  );
};

export default Click;
