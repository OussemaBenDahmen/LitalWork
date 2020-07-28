import React from "react";
import "./style.css";
const ProductDetail = (props) => {
  return (
    <div>
      <div className="ProductDetailSection">
        <div className="ProductImage">
          <img src={`http://localhost:5000/${props.Product.Image}`} alt="" />
        </div>
        <div className="ProductDetails">
          <h1>{props.Product.name}</h1>
          <h2>{props.Product.type}</h2>
          <h3>{props.Product.Detail}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
