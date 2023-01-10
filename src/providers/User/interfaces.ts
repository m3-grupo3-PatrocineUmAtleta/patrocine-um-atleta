import { iUserLogin } from "../../services/userLogin";
import { iRegisterData } from "../../services/userRegister";

export interface iContext {
  user: iUser | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  buttonValue: string;
  setButtonValue: React.Dispatch<React.SetStateAction<string>>;
  allAthletes: iAthlete[];
  setAllAthletes: React.Dispatch<React.SetStateAction<iAthlete[]>>;
  openModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  settingsModal: string;
  setSettingsModal: React.Dispatch<React.SetStateAction<string>>;
  registerUser: (data: iRegisterData) => Promise<void>;
  loginUser: (data: iUserLogin) => void;
  selectedAtlhete: number | null;
  setSelectedAtlhete: React.Dispatch<React.SetStateAction<number | null>>;
  sponsored: iSponsored [];
  setSponsored: React.Dispatch<React.SetStateAction<iSponsored []>>;
  gotoAthletePage: (event:any) => void;
}
export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  site?: string;
  name: string;
  cpf?: number;
  age?: string;
  image?: string;
  bio: string;
  address: string;
  contacts: { phoneNumber?: string; email?: string };
  favourites?: iAthlete[];
  sponsoredAthletes?: iAthlete[];
  isAdmin?: boolean;
  id?: number;
}

export interface iTournament {
  name: string;
  location: string;
  date: string;
  status: "Vitória" | "Derrota" | "Empate";
  participants: iAthlete[];
  rewards: string;
  image?: string;
}

export interface iInstitution {
  name: string;
  aboutUs: string;
  location: string;
  image: string;
  tournamentsInfo?: {
    tournaments: iTournament[];
    totalPlayed: number;
  };
  institutionAthletes: iAthlete[];
}

export interface iMedias {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

interface iDonation {
  amount: number;
  athlete: iAthlete;
  institution: iInstitution;
}

export interface iDeposition {
  author: iUser;
  content: string;
}

export interface iAthlete {
  id: number;
  name: string;
  nickname: string;
  imgUrl: string;
  age: number;
  bio: string;
  city: string;
  depositions?: iDeposition[];
  tournaments?: iTournament[];
  donations: iDonation[];
  medias?: iMedias;
}

export interface iAthleteSponsored {
  id: number | string;
  userId?: string;
  name?: string;
  nickname: string;
  imgUrl: string;
  age: number;
  bio?: string;
  city: string;
  tournaments?: iTournament[];
  donates?: iDonates[];
  midias?: iMedias;
}

interface iDonates {
  user_id: string;
  value: number;
}

export interface iSponsored {
  athlete: iAthleteSponsored;
  value: number;
}