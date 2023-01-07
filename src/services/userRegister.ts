import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { iAthlete, iUser } from "../providers/User/interfaces";
import { api } from "./api";

export interface iRegisterData {
  name: string;
  cpf: string;
  address: string;
  age: number;
  image: string;
  bio: string;
  contacts: {
    phoneNumber: string;
  };
  email: string;
  password: string;
  favourites?: iAthlete[];
  sponsoredAthletes?: iAthlete[];
  isAdmin: boolean;
}

export interface iResponse {
  accessToken: string;
  user: iUser;
}

export const UserRegister = async (
  dataUser: iRegisterData
): Promise<number | string> => {
  try {
    const { status } = await api.post<iResponse>("/register", dataUser);
    ToastSucess("Cadastro feito com Sucesso!");

    return status;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
    return err.message;
  }
};
