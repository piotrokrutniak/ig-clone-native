import { useQuery } from "react-query";
import { getAlbumsByUserId } from "../json-api/getAlbumsByUserId";
import { Album } from "../types";

export const useUserAlbums = (userId: number) => {
  const { data } = useQuery(["userGalleries", userId], () =>
    getAlbumsByUserId(userId),
  );
  const albums = data || ([] as Album[]);

  return albums;
};
