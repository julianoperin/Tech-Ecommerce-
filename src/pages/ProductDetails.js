import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
// import { ProductContext } from '../context/cart'
import Loading from "../components/Loading";
//! to navigate to another page
import { useHistory } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              //add to cart
              history.push("/cart");
            }}
          >
            Add to cart
          </button>
        </article>
      </section>
    );
  }

  return <h1>hello from produasdasdasdct details page. {product.id} </h1>;
}
