import { createContext, useState } from "react";

interface iContext {}

interface iProviderProps {
  children: React.ReactNode;
}

interface iUser {}

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser>({});
  const item = {};

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
