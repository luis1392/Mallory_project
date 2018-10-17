import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList";

import "./AllProducts.css";
class AllProducts extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12 products-container">
          <h1>All Products</h1>
          <span>All available listing</span>
          <div className="col-md-12 container-search">
            <Link className="btn-search" to="/all-products?onSale=true">
              On Sale
            </Link>
            <Link className="btn-search" to="/all-products">
              All items
            </Link>
          </div>
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default AllProducts;
