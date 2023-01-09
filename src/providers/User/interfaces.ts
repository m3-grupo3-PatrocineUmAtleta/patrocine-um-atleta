import { StringSchema } from "yup";
import { iUserLogin } from "../../services/userLogin";
import { iRegisterData } from "../../services/userRegister";

export interface iContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  buttonValue: string;
  setButtonValue: React.Dispatch<React.SetStateAction<string>>;
  athletes: iAthlete[];
  setAthletes: React.Dispatch<React.SetStateAction<iAthlete[]>>;
  openModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  settingsModal: string;
  setSettingsModal: React.Dispatch<React.SetStateAction<string>>;
  registerUser: (data: iRegisterData) => Promise<void>;
  loginUser: (data: iUserLogin) => void;
  selectedAtlhete: number | null;
  setSelectedAtlhete: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  email: string;
  name: string;
  cpf?: number;
  dateOfBirth?: string;
  street?: string;
  city?: string;
  cep?: string;
  bio?: string;
  imgUrl?: string;
  phoneNumber?: string;
  favourites?: iAthlete[];
  sponsoredAthletes?: iAthlete[];
  isAdmin?: boolean;
  id?: number;
  site?: string;
}

export interface iTournament {
  name: string;
  location: string;
  date: string;
  status: "Vitória" | "Participando";
  participants: iAthlete[];
  rewards: string;
  place: string;
}

export interface iInstitution {
  name: string;
  aboutUs: string;
  location: string;
  image: string;
  tournamentsInfo?: {
    tournaments: iTournament[];
    totalPlayed: number;
    wins: number;
  };
  institutionAthletes: iAthlete[];
  raisings: string;
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
  name: string;
  age: number;
  athlete_id: number;
  img: string;
  institution: iInstitution;
  medias?: iMedias;
  bio: string;
  city: string;
  depositions?: iDeposition[];
  tournaments?: iTournament[];
  donations: iDonation[];
}
