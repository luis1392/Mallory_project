import React, { Component } from "react";

import ProductList from "../ProductList";
import "./ProductsList.css";
class ProductsList extends Component {
  state = {
    loading: true,
    error: null,
    productsList: null,
    category: ""
  };
  handleUpdate = category => {
    this.setState(
      {
        category: `?category=${category}`
      },
      () => {
        return this.loadProductsList();
      }
    );
  };
  componentDidUpdate = prevProps => {
    if (this.props.category !== prevProps.category) {
      this.handleUpdate(this.props.category);
    }
  };
  componentDidMount = () => {
    if (this.props.category) {
      this.handleUpdate(this.props.category);
    } else {
      this.loadProductsList();
    }
  };
  renderElementProductsList = productsList => {
    const product = productsList.map(element => {
      return <ProductList key={element._id} product={element} />;
    });

    return product;
  };

  loadProductsList = () => {
    this.setState({
      loading: true,
      error: null
    });
    fetch(
      `https://mallory-furniture-admin.now.sh/api/v1/products${
        this.state.category
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          productsList: data
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
    const { productsList, loading, error } = this.state;
    return (
      <React.Fragment>
        {loading && <p>Loading product...</p>}
        {!productsList && "Sin resultados"}
        {!loading &&
          productsList && (
            <div>{this.renderElementProductsList(productsList)}</div>
          )}

        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default ProductsList;
