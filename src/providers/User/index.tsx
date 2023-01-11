import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterDataDonates } from "../../services/registerDonates";
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
  const [user, setUser] = useState<iUser | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("Perfil");
  const [athletes, setAthletes] = useState([] as iAthlete[]);
  const [openModal, setIsOpenModal] = useState(false);
  const [filterAthletes, setFilterAthletes] = useState([] as iAthlete[]);
  const [settingsModal, setSettingsModal] = useState("");
  const [selectedAtlhete, setSelectedAtlhete] = useState<number | null>(null);
  const [athlete, setAthlete] = useState<iAthleteSponsored>();
  const [sponsored, setSponsored] = useState<iSponsored[] | undefined>([]);
  const [donateData, setDonateData] = useState<iRegisterDataDonates>();

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
    try {
      setIsLoading(true);
      const response = await UserLogin(data);

      if (response !== undefined) {
        setUser(response);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const gotoAthletePage = (event: any) => {
    navigate("/athletePage");
    const athleteId: string = event.target.id;

    const clickedAthlete = sponsored?.find(
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
        setDonateData,
        donateData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
