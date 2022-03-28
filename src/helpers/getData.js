const axios = require("axios").default;

export const getData = async () => {
  try {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const resp = await axios.get(BASE_URL);
    const products = await resp.data;
    const imgs = products.map((img) => {
      return {
        id: img._id,
        name: img.name,
        // price: img.price,
        category: img.category,
        promo: img.promo,
        url: img.img,
        size: img.size,
      };
    });
    return imgs;
  } catch (error) {
    console.log(error);
  }
};
