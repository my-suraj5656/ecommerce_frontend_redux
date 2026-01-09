import axios from "axios";

export const getProducts = async (page, category) => {
  const limit = 10;
  const skip = (page - 1) * limit;
  let url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * 10}`;

  const res = await axios.get(url);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get("https://dummyjson.com/products/categories");
  return res.data;
};
