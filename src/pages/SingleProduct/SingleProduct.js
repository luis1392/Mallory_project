import React, { Component } from "react";

import Product from "../../components/Product";
import "./SingleProduct.css";
class SingleProduct extends Component {
  render() {
    const product_id = this.props.match.params.product_id;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="col-md-12 products-container">
            <Product productId={product_id} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleProduct;
