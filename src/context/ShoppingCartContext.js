import React from "react";
export const ShoppingCartContext = React.createContext({
  shoppingCartItems: null,
  addToShoppingcart: () => {}
});
