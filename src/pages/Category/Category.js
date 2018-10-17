import React, { Component } from "react";

import HeroImage from "../../components/HeroImage";
import ProductsList from "../../components/ProductsList";
class Category extends Component {
  render() {
    const categoryPath = this.props.match.params.category_type;
    return (
      <div>
        <HeroImage bgImage={categoryPath} />
        <div className="container-fluid">
          <div className="col-md-12 products-container">
            <h2>
              {categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1)}
            </h2>
            <span>
              All {categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1)}{" "}
              products
            </span>
            <ProductsList category={categoryPath} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
