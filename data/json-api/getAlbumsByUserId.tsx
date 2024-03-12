import { Album } from "../types";

export const getAlbumsByUserId = async (userId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Album[] = await response.json();

  return body || [];
};
