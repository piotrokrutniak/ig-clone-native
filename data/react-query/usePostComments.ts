import { useQuery } from "react-query";
import getPostComments from "../json-api/getPostComments";
import { Comment } from "../types";

export const usePostComments = (postId: number) => {
  const { data, isLoading, isError } = useQuery(["postComments", postId], () =>
    getPostComments(postId),
  );
  const comments = data?.body as Comment[];
  return { comments, isLoading, isError };
};
