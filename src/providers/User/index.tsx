import { createContext, useState } from "react";
import { iContext, iProviderProps, iUser, iAthlete } from "./interfaces";

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const [allAthletes, setAllAthletes] = useState([] as iAthlete[]);
  const [openModal, setIsOpenModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState("");

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        setIsLoading,
        buttonValue,
        setButtonValue,
        allAthletes,
        setAllAthletes,
        openModal,
        setIsOpenModal,
        settingsModal,
        setSettingsModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
