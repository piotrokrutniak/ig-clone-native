import { useQuery } from "react-query";
import { getUserById } from "../json-api/getUserById";
import { User } from "../types";

export const useUserById = (userId: number) => {
  const { data: user } = useQuery(["user", userId], () => getUserById(userId));

  return user as User;
};
