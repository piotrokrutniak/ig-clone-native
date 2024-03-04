import { useQuery } from "react-query";
import { Post } from "../types";
import getPostsByUserId from "../json-api/getPostsByUserId";

export const useUserPosts = (id: number) => {
  const { data } = useQuery(['userPosts', id], () => getPostsByUserId());
  const posts = data?.body || [] as Post[];
  
  return posts;
}