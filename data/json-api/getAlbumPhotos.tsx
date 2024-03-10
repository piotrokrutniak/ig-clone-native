export default async function GetAlbumPhotos(albumId: number, page: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos${page ? `?_page=${page}` : ""}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body = await response.json();
  const headers = response.headers;

  return { body: body, count: headers.get("x-total-count") ?? "0" };
}
