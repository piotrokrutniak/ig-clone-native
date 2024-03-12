import { Comment } from "../types";

export const postPostComment = async (data: Comment) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const comment: Comment = await response.json();

  return comment;
};
