import { useQuery } from "react-query";
import { getCommentsByPostId } from "../json-api/getPostComments";
import { Comment } from "../types";

export const usePostComments = (postId: number) => {
  const { data, isLoading, isError } = useQuery(["postComments", postId], () =>
    getCommentsByPostId(postId),
  );
  const comments = data as Comment[];
  return { comments, isLoading, isError };
};
