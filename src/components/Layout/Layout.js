import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import ShoppingCart from "../ShoppingCart";

class Layout extends Component {
  state = {
    isVisibleShoppingCart: ""
  };
  handleOpenShoppingCart = openCart => {
    this.setState({
      isVisibleShoppingCart: openCart
    });
  };
  handleCloseShoppingCart = closeCart => {
    this.setState({
      isVisibleShoppingCart: closeCart
    });
  };
  render() {
    const { isVisibleShoppingCart } = this.state;
    return (
      <div>
        <ShoppingCart
          isVisible={isVisibleShoppingCart}
          onClickClose={this.handleCloseShoppingCart}
          product={this.props.product}
        />
        <Header onClickOpen={this.handleOpenShoppingCart} />
        <main>
          <div>{this.props.children}</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
