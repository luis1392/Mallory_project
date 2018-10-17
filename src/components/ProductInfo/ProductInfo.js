import React, { Component } from "react";

class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div className="container-product-data">
            <div className="product-title">
              <h3>{product.item}</h3>
              <span>$ {product.price}</span>
            </div>
            <div className="product-state">
              <p>Condition</p>
              <span>{product.condition}</span>
            </div>
            <div className="product-state">
              <p>Measurements</p>
              <span>
                W:
                {product.width} L:
                {product.length} H:
                {product.height}{" "}
              </span>
            </div>
            <button className="btn btn-shopping-car">Add to Car</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductInfo;
