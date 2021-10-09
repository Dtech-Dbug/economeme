import axios from "axios";

const HOST = "http://localhost:8000/api";
export const getCategories = async () => {
  return await axios.get(`${HOST}/getAllCategories`);
};
