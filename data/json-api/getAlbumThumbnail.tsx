import { Photo } from "../types";

export const getAlbumThumbnail = async (albumId?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=1`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Photo = await response.json();

  return body;
};
