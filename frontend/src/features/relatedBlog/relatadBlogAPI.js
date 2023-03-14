import axios from "../../util/axios";

export default async function fetchRelatedBlogsAPI(tags, id) {
  let queryString;
  if (tags?.length > 0) {
    queryString =
      tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`;
  }

  const response = await axios.get(`blogs?${queryString}`);
  return response.data;
}
