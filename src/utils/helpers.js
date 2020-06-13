import url from "./URL";

//! Flatten
export function flattenProducts() {}

//! helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
