import React, { Component } from "react";

class ProductImage extends Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-8">
          <img src={product.imageLink} alt={product.item} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductImage;
