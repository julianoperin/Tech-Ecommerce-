import React, { useContext } from "react";
import { ProductContext } from "../context/products";

export default function Products() {
  const { greeting } = useContext(ProductContext);
  const { product } = useContext(ProductContext);

  return (
    <h1>
      hello from products page {greeting} {product.title}
    </h1>
  );
}
