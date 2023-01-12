import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { iAthlete, iUser } from "../UserContext/interfaces";
import { api } from "./api";

export interface iRegisterData {
  name: string;
  cpf: string;
  dateOfBirth: number;
  street: string;
  city: string;
  cep: number;
  imgUrl: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
  favorites?: iAthlete[];
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
    return err.message;
  }
};
