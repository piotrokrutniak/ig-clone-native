import { useQuery } from "react-query";
import GetPosts from "../json-api/getPosts";
import { Post } from "../types";

export const usePosts = () => {
  const { data, isLoading } = useQuery('posts', () => GetPosts());
  const posts: Post[] = data?.body;

  return { posts, isLoading };
}