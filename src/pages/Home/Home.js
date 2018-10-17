import React, { Component } from "react";

import HeroImage from "../../components/HeroImage";
import ProductsList from "../../components/ProductsList";
import Categories from "../../components/Categories";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroImage
          title="Mallory Furniture"
          subtitle="Your furniture is old"
          stitle="Ours is older"
        />
        <div className="container-fluid">
          <div className="col-md-12 products-container">
            <h2>Feature Products</h2>
            <span>Check out some of our favorite listings</span>
            <ProductsList />
            <Categories />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
