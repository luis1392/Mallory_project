import React, { Component } from "react";

import { Link } from "react-router-dom";

class ProductList extends Component {
  render() {
    const { _id, imageLink, item, price } = this.props.product;
    return (
      <div className="product-container">
        <Link to={`/product/${_id}`}>
          <img src={imageLink} alt="producto" className="single-product" />
          <h3>{item}</h3>
          <span>$ {price}</span>
        </Link>
      </div>
    );
  }
}

export default ProductList;
