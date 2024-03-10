export default async function GetPosts(page: number = 1) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
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
