export default async function GetAlbumPhotos(id: number, page?: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/post/${id}/photos${page ? `?_page=${page}` : ""}`,
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
