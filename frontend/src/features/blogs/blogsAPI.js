import axios from "../../util/axios";

export default async function fetchBlogsAPI() {
  const response = await axios.get("blogs");
  return response.data;
}
