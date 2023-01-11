import { iUserLogin } from "../../services/userLogin";
import { iRegisterData } from "../../services/userRegister";

export interface iContext {
  user: iUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
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
  sponsored: iSponsored[] | undefined;
  setSponsored: React.Dispatch<React.SetStateAction<iSponsored[] | undefined>>;
  gotoAthletePage: (event: any) => void;
  filterAthletes: iAthlete[];
  setFilterAthletes: React.Dispatch<React.SetStateAction<iAthlete[]>>;
  athlete: iAthleteSponsored | undefined;
}
export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  site?: string;
  name: string;
  cpf?: number;
  cnpj?: string;
  dateOfBirth?: string;
  imgUrl?: string;
  bio: string;
  street: string;
  city: string;
  cep: number;
  phone: string;
  email: string;
  favourites?: iAthlete[];
  sponsoredAthletes?: iAthlete[];
  isAdmin?: boolean;
  id?: number;
  tournaments?: iTournament[];
}

export interface iTournament {
  name: string;
  location: string;
  date: string;
  status: "Vitória" | "Participando";
  participants: iAthlete[];
  rewards: string;
  imgUrl?: string;
  place?: string;
  id: number;
}

export interface iInstitution {
  name?: string;
  aboutUs?: string;
  location?: string;
  image?: string;
  tournamentsInfo?: number;
}

export interface iMedias {
  image?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
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
  donates?: iDonation[];
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
export interface iAthleteRegister {
  name: string;
  age: string;
  nickname?: string;
  imgUrl: string;
  bio: string;
  city: string;
  medias: iMedias;
  tournaments?: iTournament[];
  donations?: iDonation[];
  depositions?: iDeposition[];
}

export interface iAthleteEdit {
  name: string;
  age: string;
  nickname?: string;
  imgUrl: string;
  bio: string;
  city: string;
  medias: iMedias;
  tournaments?: iTournament[];
  donations?: iDonation[];
  depositions?: iDeposition[];
  userId: string;
}

interface iDonation {
  amount: number;
  athlete: iAthlete;
  institution: iInstitution;
}

interface iDonation {
  amount: number;
  athlete: iAthlete;
  institution: iInstitution;
}

export interface iDepositions {
  athleteId: number;
  content: string;
  userId: number;
  id: number;
}
