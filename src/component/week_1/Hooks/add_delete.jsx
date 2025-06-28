import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState(["dereje", "tesfaye", "kelem"]);
  const add = () => {
    setName([...name, "dereaki"]);
  };
  const Delete = () => {
    setName(name.filter((item) => item !== "dereje"));
  };
  return (
    <div>
      {name.map((item) => (
        <h1>{item}</h1>
      ))}

      <button onClick={add} className="p-1 mr-2 bg-blue-600">
        ADD
      </button>
      <button onClick={Delete} className="p-1 bg-blue-600">
        Delete
      </button>
    </div>
  );
};

export default Add;
