import React, { Component } from "react";

import { Link } from "react-router-dom";
class Categories extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-categories">
          <h2>Browse by Categories</h2>
          <span>Explore by furniture type.</span>
          <div className="col-md-8 col-md-offset-2 block-link-category">
            <Link to="/category/seating" className="btn-category">
              Seating
            </Link>
            <Link to="/category/tables" className="btn-category">
              Tables
            </Link>
            <Link to="/category/desks" className="btn-category">
              Desks
            </Link>
            <Link to="/category/bedroom" className="btn-category">
              Bedroom
            </Link>
          </div>
          <div className="col-md-8 col-md-offset-2 block-link-category">
            <Link to="/category/storage" className="btn-category">
              Storage
            </Link>
            <Link to="/category/miscellaneous" className="btn-category">
              Misc
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
