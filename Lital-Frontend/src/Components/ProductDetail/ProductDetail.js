import React from "react";
import "./style.css";
const ProductDetail = (props) => {
  return (
    <div>
      <div className="ProductDetailSection">
        <div className="ProductImage"></div>
        <div className="ProductDetails">
          <h1>{props.Product.name}</h1>
          <h2>{props.Product.id}</h2>
        </div>
      </div>
      {/* <div>
        <Link>
          <button><img src= alt=""/></button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProductDetail;
