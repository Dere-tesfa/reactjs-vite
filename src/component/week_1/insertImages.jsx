import React from "react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";

const Images = () => {
  const shopingCart = [
    {
      img: img1,
      titel: "Phone",
      price: "100",
    },
    {
      img: img2,
      titel: "Earphone",
      price: "90",
    },
    {
      img: img3,
      titel: "Car",
      price: "10000",
    },
    {
      img: img4,
      titel: "BasketBall",
      price: "50",
    },
    {
      img: img5,
      titel: "Laptop",
      price: "100",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center flex-shrink-0 w-64 m-4 font-bold text-center display ">
        {shopingCart.map((cart) => (
          <div>
            <img
              className="rounded-lg"
              style={{ width: 250, height: 250 }}
              src={cart.img}
            />
            <h1>{cart.titel}</h1>
            <h1>${cart.price}</h1>
            <button className="w-64 mb-6 text-white bg-blue-700 rounded-lg size-14">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
