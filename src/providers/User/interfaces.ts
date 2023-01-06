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
  registerUser: (data: iRegisterData) => void;
}

export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  name: string;
  site?: string;
  bio?: string;
  adress: string;
  contacts?: {
    phoneNumber?: string;
    email?: string;
  };
  favourites?: iAthlete[];
  sponsoredAthletes?: iAthlete[];
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
  institution: iInstitution;
  medias?: iMedias;
  bio: string;
  hometown: string;
  depositions?: iDeposition[];
  tournaments?: iTournament[];
  donations: iDonation[];
}
