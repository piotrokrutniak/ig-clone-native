import { User } from "../types";

export const getUsers = async (page: number = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: User[] = await response.json();
  const headers = response.headers;

  return { body, count: headers.get("x-total-count") ?? "0" };
};
