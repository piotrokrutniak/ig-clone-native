export default async function GetAlbumsByUserId(
  page: number = 1,
  userId?: number,
) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?${userId ? `userId=${userId}` : ""}_page=${page}`,
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
