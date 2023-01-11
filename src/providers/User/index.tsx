import { ListItem } from "@mui/material";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AthleteCard } from "../../components/AthleteCard";
import { iUserLogin, UserLogin } from "../../services/userLogin";
import { iRegisterData, UserRegister } from "../../services/userRegister";
import {
  iContext,
  iProviderProps,
  iUser,
  iAthlete,
  iSponsored,
  iAthleteSponsored,
} from "./interfaces";

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("Perfil");
  const [athletes, setAthletes] = useState([] as iAthlete[]);
  const [openModal, setIsOpenModal] = useState(false);
  const [filterAthletes, setFilterAthletes] = useState([] as iAthlete[]);
  const [settingsModal, setSettingsModal] = useState("");
  const [selectedAtlhete, setSelectedAtlhete] = useState<number | null>(null);
  const [athlete, setAthlete] = useState<iAthleteSponsored>();
  const [sponsored, setSponsored] = useState<iSponsored[]>([]);

  const navigate = useNavigate();

  const registerUser = async (data: iRegisterData) => {
    const response = await UserRegister(data);
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

  const gotoAthletePage = (event: any) => {
    navigate("/athletePage");
    const athleteId: string = event.target.id;

    const clickedAthlete: iSponsored | undefined = sponsored.find(
      (item) => item.athlete.id == athleteId
    );

    setAthlete(clickedAthlete?.athlete);
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
        gotoAthletePage,
        sponsored,
        setSponsored,
        filterAthletes,
        setFilterAthletes,
        athlete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
