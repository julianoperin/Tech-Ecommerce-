import url from "./URL";

//! Flatten
export function flattenProducts(data) {
  return data.map((item) => {
    //Cloudinary
    let image = item.image.url;
    return { ...item, image };
  });
}

//! helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
