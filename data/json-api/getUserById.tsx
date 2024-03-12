import { User } from "../types";

export const getUserById = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const body: User = await response.json();

  return body;
};
