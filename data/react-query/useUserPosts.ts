import { useQuery } from "react-query";
import { Post } from "../types";
import { getPostsByUserId } from "../json-api/getPostsByUserId";

export const useUserPosts = (userId: number) => {
  const { data } = useQuery(["userPosts", userId], () =>
    getPostsByUserId(userId),
  );
  const posts = data || ([] as Post[]);

  return posts;
};
