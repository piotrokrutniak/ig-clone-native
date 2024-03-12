import { Comment } from "../types";

export const getCommentsByPostId = async (postId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Comment[] = await response.json();

  return body || [];
};
