import { Photo } from "../types";

export const getAlbumPhotos = async (id: number, page?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos${page ? `?_page=${page}` : ""}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: Photo[] = await response.json();

  return body || [];
};
