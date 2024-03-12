import { useQuery } from "react-query";
import { getPosts } from "../json-api/getPosts";
import { Post } from "../types";

export const usePosts = () => {
  const { data, isLoading } = useQuery("posts", () => getPosts());
  const posts: Post[] = data?.body || [];

  return { posts, isLoading };
};
