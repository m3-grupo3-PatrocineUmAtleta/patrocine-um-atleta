import { iResponseDonates } from "../../services/getDonates";
import { iRegisterDataDonates } from "../../services/registerDonates";
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
  depositions: iDepositions[] | undefined;
  createDepositionsList: () => void;
  finalyDeps: iDepositionsToEspecifyAthlete[] | undefined;
  donateData: iRegisterDataDonates | undefined;
  setDonateData: React.Dispatch<
    React.SetStateAction<iRegisterDataDonates | undefined>
  >;
  contentAllUser: iUser | undefined;
  setContentAllUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
  donationsList: () => void;
  listDonations: iResponseDonates [] | undefined;
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
  favorites?: iAthlete[];
  isAdmin?: boolean;
  id?: number;
}

export interface iTournament {
  name: string;
  location: string;
  date: string;
  status: "Vitória" | "Participando";
  participants: iparticipants[];
  rewards: string;
  imgUrl?: string;
  place?: string;
  id?: number;
}
export interface iparticipants {
  athleteId: number;
}

export interface iInstitution {
  name?: string;
  bio?: string;
  city?: string;
  image?: string;
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
}

export interface iAthleteEdit {
  name: string;
  age: string;
  nickname?: string;
  imgUrl: string;
  bio: string;
  city: string;
  medias: iMedias;
  userId: string;
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

export interface iDepositionsToEspecifyAthlete {
  content: string;
  name: string | undefined;
  userId: number | undefined;
  img: string | undefined;
}
