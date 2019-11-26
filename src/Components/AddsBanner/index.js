import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <p className="header">HOT Holiday deals</p>
        <p className="text">
          Sky. Garden loves all the fathers and knows that you need some help in
          choosing something special. Here is few of the sweet things we found
          and you might like.
        </p>
        <h2 className="deal-expires-in-01">Deal expires in 1:23:05 hrs</h2>
      </div>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574769675/SkyTest/shoppinglady_1.png"
          alt="shoping is great"
        />
        <img
          className="black-bubble"
          src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574770236/SkyTest/black_bubble.png"
          alt="shoping is great"
        />

        <img
          className="discount-circle"
          src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574769664/SkyTest/discountcircle.png"
          alt="shoping is great"
        />
        <img
          className="discount-line"
          src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574769691/SkyTest/discount_line.png"
          alt="shoping is great"
        />
        <h2 className="delivery">DELIVERY SAME DAY!</h2>
        <h2 className="discount">-10%</h2>
      </div>
    </div>
  );
};

export default Banner;
