import axios from "../../util/axios";

export default async function fetchSingleBlogAPI(id) {
  const response = await axios.get(`blogs/${id}`);
  return response.data;
}
