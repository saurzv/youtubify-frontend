import axios from "axios";

const baseUrl = "http://localhost:8080/playlist";

export const fetchFromAPI = async (id) => {
  const response = await axios.get(`${baseUrl}?id=${id}`);
  return response.data;
};
