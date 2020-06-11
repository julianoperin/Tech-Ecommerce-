// products context
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import URL from "../utils/URL";
export const ProductContext = createContext();

//! Provider, Consumer, useContext

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/products`).then((response) => {
      setProducts(response.data);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
