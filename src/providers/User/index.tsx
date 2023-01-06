import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iResponseAddress } from "../../services/getAddress";
import { iRegisterData, UserRegister } from "../../services/userRegister";
import { iContext, iProviderProps, iUser, iAthlete } from "./interfaces";

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const [allAthletes, setAllAthletes] = useState([] as iAthlete[]);
  const [openModal, setIsOpenModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState("");
  const navigate = useNavigate();

  const registerUser = async (data: iRegisterData) => {
    const response = await UserRegister(data);

    if (response === 201) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

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
     ,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
