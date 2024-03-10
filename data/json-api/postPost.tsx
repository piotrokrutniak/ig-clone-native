import { Post } from "../types";

export async function postPost(data: Post) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const post: Post = await response.json();

  return post;
}
