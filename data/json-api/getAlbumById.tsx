import { Album } from "../types";

export const getAlbumById = async (id?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Album = await response.json();

  return body;
};
