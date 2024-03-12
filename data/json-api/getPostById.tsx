import { Post } from "../types";

export const getPostById = async (id?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Post = await response.json();

  return body;
};
