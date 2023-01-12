import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/getAllUsers";
import { getDepositions } from "../../services/getDepositions";
import { getDonations, iResponseDonates } from "../../services/getDonates";
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
  iDepositions,
  iDepositionsToEspecifyAthlete,
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
  const [depositions, setDepositions] = useState<iDepositions[] | undefined>(
    []
  );
  const [finalyDeps, setFinalyDeps] = useState<
    iDepositionsToEspecifyAthlete[] | undefined
  >([]);
  const [donateData, setDonateData] = useState<iRegisterDataDonates>();
  const [contentAllUser, setContentAllUser] = useState<iUser | undefined>();
  const [listDonations, setListDonations] = useState<
    iResponseDonates[] | undefined
  >([]);

  const navigate = useNavigate();

  const registerUser = async (data: iRegisterData) => {
    try {
      setIsLoading(true);
      const response = await UserRegister(data);
      if (response === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
    navigate("/athlete");
    const athleteId: string = event.target.id;

    const clickedAthlete = sponsored?.find(
      (item) => item.athlete.id == athleteId
    );

    setAthlete(clickedAthlete?.athlete);
  };

  const createDepositionsList = async () => {
    const depList = await getDepositions();
    const usersList = await getAllUsers();
    const finalDepositions: iDepositionsToEspecifyAthlete[] = [];
    const storageAthlete: any = localStorage.getItem("@SelectedAthlete");
    const athlete = JSON.parse(storageAthlete);

    const athleteDepList = depList?.filter((dep) => {
      return dep.athleteId == athlete.id;
    });

    athleteDepList?.forEach((athlete) => {
      const user = usersList.find((user) => user.id == athlete.userId);
      const obj = {
        content: athlete.content,
        name: user?.name,
        userId: user?.id,
        img: user?.imgUrl,
      };
      finalDepositions.push(obj);
    });

    setFinalyDeps(finalDepositions);
  };

  const donationsList = async () => {
    const list = await getDonations();
    list && setListDonations(list);
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
        depositions,
        createDepositionsList,
        finalyDeps,
        setDonateData,
        donateData,
        contentAllUser,
        setContentAllUser,
        donationsList,
        listDonations,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
