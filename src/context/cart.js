// cart context
import React, { useState, createContext, useEffect } from "react";

import localCart from "../utils/localCart";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    // local storage
    //cart Items
    let newCartItems = cart.reduce((total, cartItem) => {
      console.log({ total, cartItem });
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);

    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //! Remove item
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  //! Increase Amount
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };
  //! Decrease Amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
    }
  };
  //! Add to cart
  const addToCart = (id) => {};
  //! Clear Cart
  const clearCart = (id) => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
