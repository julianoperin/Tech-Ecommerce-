// cart context
import react from "react";

import localCart from "../utils/localCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
    const []
  return <CartContext.Provider value="hello">{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
