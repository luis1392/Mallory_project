import React, { Component } from "react";

import "./ShoppingCart.css";
import ProductCart from "../ProductCart";

class ShoppingCart extends Component {
  state = {
    isVisible: false,
    isEmpty: true,
    shoppingCartItems: [],
    toDelete: null
  };
  componentDidUpdate = prevProps => {
    console.log(this.props);
    if (this.props.isVisible !== prevProps.isVisible) {
      this.setState({
        isVisible: this.props.isVisible
      });
    }
    if (this.props.product !== prevProps.product) {
      this.setState({
        shoppingCartItems: [
          ...this.state.shoppingCartItems,
          this.props.product
        ],
        isVisible: !this.state.isVisible,
        isEmpty: false
      });
    }
  };
  handleClickClose = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
    this.props.onClickClose(false);
  };

  handleClickDelete = item => {
    if (item) {
      this.setState({
        toDelete: item
      });
      this.renderProductsCart(this.state.shoppingCartItems, item);
    }
  };

  renderProductsCart = (shoppingCartItems, item = null) => {
    if (shoppingCartItems && item) {
      const product = shoppingCartItems.map(element => {
        if (item._id !== element._id) {
          return (
            <ProductCart
              key={element._id}
              shoppingCartItem={element}
              handleClickDelete={this.handleClickDelete}
            />
          );
        }
      });
      return product;
    }
    if (shoppingCartItems) {
      const product = shoppingCartItems.map(element => {
        return (
          <ProductCart
            key={element._id}
            shoppingCartItem={element}
            handleClickDelete={this.handleClickDelete}
          />
        );
      });
      return product;
    }
  };
  addToShoppingcart = () => {};
  render() {
    const { isVisible, isEmpty, shoppingCartItems } = this.state;
    return (
      <React.Fragment>
        {isVisible && (
          <div className="shopping-cart-container">
            <div className="header-cart">
              <span
                onClick={this.handleClickClose}
                className="x-btn-shopping-cart"
              >
                X
              </span>
              <h4>Your Cart</h4>
            </div>
            {isEmpty && <p className="no-items">No items in Cart</p>}
            <div>{this.renderProductsCart(shoppingCartItems)}</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
