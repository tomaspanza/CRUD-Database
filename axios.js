import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

getProducts();
