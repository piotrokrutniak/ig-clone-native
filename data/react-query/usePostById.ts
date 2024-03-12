import { useQuery } from "react-query";
import { getPostById } from "../json-api/getPostById";
import { Photo, Post } from "../types";
import { getPostPhotos } from "../json-api/getPostPhotos";

export const usePostById = (id: number) => {
  const {
    data: postData,
    isLoading,
    isError,
  } = useQuery(["post", id], () => getPostById(id));
  const { data: photosData } = useQuery(["postPhotos", id], () =>
    getPostPhotos(id, 1),
  );
  const post = {
    ...(postData as Post),
    photos: photosData as Photo[],
  };

  return { post, isLoading, isError };
};
