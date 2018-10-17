import React, { Component } from "react";

import ProductImage from "../ProductImage";
import ProductInfo from "../ProductInfo";

class Product extends Component {
  state = {
    loading: true,
    error: null,
    product: null
  };

  componentDidUpdate = prevProps => {
    if (this.props.productId !== prevProps.productId) {
      this.loadProduct();
    }
  };
  componentDidMount = () => {
    this.loadProduct();
  };

  loadProduct = () => {
    this.setState({
      loading: true,
      error: null
    });
    fetch(
      `https://mallory-furniture-admin.now.sh/api/v1/products/${
        this.props.productId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          product: data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  render() {
    const { product, loading, error } = this.state;
    return (
      <React.Fragment>
        {loading && <p>Loading product...</p>}
        {!product && "Sin resultado"}
        {!loading &&
          product && (
            <div>
              <ProductImage product={product} />

              <ProductInfo product={product} />
            </div>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default Product;
