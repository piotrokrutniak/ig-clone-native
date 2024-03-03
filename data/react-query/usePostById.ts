import { useQuery } from "react-query";
import GetPostById from "../json-api/getPostById";
import { Photo, Post } from "../types";
import getPostPhotos from "../json-api/getPostPhotos";

export const usePostById = (id: number) => {
  const { data: postData, isLoading, isError } = useQuery(['post', id], () => GetPostById(id));
  const { data: photosData } = useQuery(["postPhotos", id], () => getPostPhotos(id, 1));
  const post = {
    ...postData?.body as Post,
    photos: photosData?.body as Photo[]
  }

  return { post, isLoading, isError };
}
