import { Post } from "../types";

export const getPosts = async (page: number = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Post[] = await response.json();
  const headers = response.headers;

  return { body, count: headers.get("x-total-count") ?? "0" };
};
