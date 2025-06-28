import React from "react";

const ListExersise = () => {
  const shopingList = [
    {
      id: 1,
      name: "phone",
      price: 1000,
    },
    {
      id: 2,
      name: "laptop",
      price: 2000,
    },
    {
      id: 4,
      name: "bag",
      price: 500,
    },
    {
      id: 4,
      name: "watch",
      price: 200,
      quality: 1,
    },
  ];
  return (
    <div>
      {shopingList.map((items) => (
        <div className="font-bold text-center ">
          <h1>Id:{items.id}</h1>
          <h1>Name:{items.name}</h1>
          <h1>Price:{items.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListExersise;
