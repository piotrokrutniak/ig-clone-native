export default async function GetCommentsByPostId(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
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
