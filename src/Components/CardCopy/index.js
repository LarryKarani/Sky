import React from "react";
import "./style.css";

const CardCopy = () => {
  return (
    <div className="col-md-6 no-padding  center-flex no-padding center-flex content-holder">
      <div id="retailer-card">
        <div>
          <div className="ready-sell">Ready to sell</div>
        </div>

          <p className="text-details">
            {" "}
            Open your free shop and start selling in 5 min!
          </p>

        <button className="get-started-button">Open Your Shop</button>
      </div>
    </div>
  );
};

export default CardCopy;

