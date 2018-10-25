import React, { Component } from "react";

class ProductCart extends Component {
  render() {
    const { shoppingCartItem } = this.props;

    this.handleClickDelete = shoppingCartItem => {
      this.props.handleClickDelete(shoppingCartItem);
    };
    return (
      <React.Fragment>
        <div className="item-cart">
          <span
            onClick={() => this.handleClickDelete(shoppingCartItem)}
            className="x-btn"
          >
            X
          </span>
          <img
            className="single-product"
            src={shoppingCartItem.imageLink}
            alt={shoppingCartItem.item}
          />
          <h5>{shoppingCartItem.item}</h5>
          <span>{shoppingCartItem.price}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCart;
