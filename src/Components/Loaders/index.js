import React from "react";
import "./style.css";

const ProductLoader = props => {
  return (
    <div className="card-loader">
      <div className="product-image-loader" />
      <div className="top-left-loader"></div>
      <p className="benefit-value-loader"></p>
      <div className="card-body-loader">
        <p className="product-title-loader"></p>
        <p className="product-text-loader"></p>

        <span className="price-loader"></span>
        <span className="previous-price-loader"></span>
      </div>
    </div>
  );
};

const Loaders = () => {
  let items = [];
  for (let i = 0; i < 12; i++) {
    items.push(<ProductLoader key={i} />);
  }

  return <div className="products">{items.map(item => item)}</div>;
};

export default Loaders
