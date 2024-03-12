import { Post } from "../types";

export const getPostsByUserId = async (userId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data: Post[] = await response.json();

  return data || [];
};
