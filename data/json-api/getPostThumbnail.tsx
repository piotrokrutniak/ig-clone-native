import { Photo } from "../types";

export const getPostThumbnail = async (id?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/photos?_limit=1`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Photo = await response.json();

  return body;
};
