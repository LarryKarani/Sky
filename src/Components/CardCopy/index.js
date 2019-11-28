import React from "react";
import "./style.css";

const CardCopy = () => {
  return (
    <div className="col-md-6 no-padding  center-flex no-padding center-flex content-holder">
      <div id="retailer-card">
        <div className="item-holder">
          <div className="customer-care">Ready to sell</div>
        </div>

        <div className="item-details">
          <h5 className="text-details">
            {" "}
            Open your free shop and start selling in 5 min!
          </h5>
        </div>

        <button className="get-started-button">Start Live Chart</button>
      </div>
    </div>
  );
};

export default CardCopy;

