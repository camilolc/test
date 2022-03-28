const axios = require("axios").default;

export const postData = async (fileUrl) => {
  const data = {
    name: "lorena",
    price: 20,
    category: "persona",
    promo: false,
    img: fileUrl,
    size: ["nada"],
  };

  await axios
    .post("https://induapi.herokuapp.com/api/products", data)
    .then((response) => console.log("resp:", response));
};
