import { useQuery } from "react-query";
import { getAlbumById } from "../json-api/getAlbumById";
import { Photo } from "../types";
import { getAlbumPhotos } from "../json-api/getAlbumPhotos";

export const useAlbumById = (id: number) => {
  const {
    data: albumData,
    isLoading,
    isError,
  } = useQuery(["album", id], () => getAlbumById(id));
  const { data: photosData } = useQuery(["albumPhotos", id], () =>
    getAlbumPhotos(id, 1),
  );
  const album = {
    ...albumData,
    photos: photosData as Photo[],
  };

  return { album, isLoading, isError };
};
