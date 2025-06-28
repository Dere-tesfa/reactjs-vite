import React from "react";

const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {numbers.map((num) => (
        <h1 key={Math.round()} className="font-bold text-center size-large">
          {num}
        </h1>
      ))}
    </div>
  );
};

export default List;
