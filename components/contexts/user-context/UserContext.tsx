import { useUserById } from "@/data/react-query/useUserById";
import { User } from "@/data/types";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(guestUser);
  const fetchedUser = useUserById(5);

  useEffect(() => {
    setUser(fetchedUser);
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
const guestUser = {
  id: 0,
  name: "Guest",
  phone: "",
  email: "",
  username: "Guest",
  website: "",
};

export { UserContextProvider, useUserContext };
