import { Post } from "../types";

export default async function getPostsByUserId(
  userId: number,
) {
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

  const data = await response.json();

  return data as Post[];
}
