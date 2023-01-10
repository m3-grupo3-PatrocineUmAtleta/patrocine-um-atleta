import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iUserLogin, UserLogin } from "../../services/userLogin";
import { iRegisterData, UserRegister } from "../../services/userRegister";
import { iContext, iProviderProps, iUser, iAthlete } from "./interfaces";

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("Perfil");
  const [athletes, setAthletes] = useState([] as iAthlete[]);
  const [openModal, setIsOpenModal] = useState(false);
  const [filterAthletes, setFilterAthletes] = useState([] as iAthlete[]);
  const [settingsModal, setSettingsModal] = useState("");
  const [selectedAtlhete, setSelectedAtlhete] = useState<number | null>(null);
  const navigate = useNavigate();

  const registerUser = async (data: iRegisterData) => {
    const response = await UserRegister(data);
    setUser;
    if (response === 201) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const loginUser = async (data: iUserLogin) => {
    const response = await UserLogin(data);

    if (response !== undefined) {
      setUser(response);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        buttonValue,
        setButtonValue,
        athletes,
        setAthletes,
        openModal,
        setIsOpenModal,
        settingsModal,
        setSettingsModal,
        registerUser,
        loginUser,
        selectedAtlhete,
        setSelectedAtlhete,
        filterAthletes,
        setFilterAthletes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
