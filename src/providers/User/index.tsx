import { createContext, useState } from "react";

interface iContext {
  user: iUser;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iProviderProps {
  children: React.ReactNode;
}

interface iUser {}

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser>({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserContext.Provider value={{ user, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
