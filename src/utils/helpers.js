import url from "./URL";

//! Flatten
export function flattenProducts(data) {
  return data.map((item) => {
<<<<<<< HEAD
    //cloudinary
=======
    //Cloudinary
>>>>>>> f24f066228ac824313559b6811f06c7a4c94d77f
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
