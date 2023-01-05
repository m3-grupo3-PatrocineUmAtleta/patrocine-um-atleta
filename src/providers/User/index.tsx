import { createContext, useState } from "react";

interface iContext {
  user: iUser | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  buttonValue: string;
  setButtonValue: React.Dispatch<React.SetStateAction<string>>;
}

interface iProviderProps {
  children: React.ReactNode;
}

interface iUser {}

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("");

  return (
    <UserContext.Provider value={{ user, isLoading, setIsLoading, buttonValue, setButtonValue }}>
      {children}
    </UserContext.Provider>
  );
};
