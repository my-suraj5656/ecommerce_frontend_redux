import axios from "axios";

export const login = async (data) => {
  const res = await axios.post("https://dummyjson.com/auth/login", data);
  localStorage.setItem("token", res.data.token);
  return res.data;
};
