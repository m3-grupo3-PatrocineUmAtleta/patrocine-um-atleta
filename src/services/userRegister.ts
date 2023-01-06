import { AxiosError } from "axios";
import { api } from "./api";

export interface iRegisterData {
  fullName: string;
  age: number;
  image: string;
  bio: string;
  cep: number;
  address: string;
  addressNumber: number;
  localy: string;
  state: string;
  phone: string;
  email: string;
  password: string;
}

export interface iResponse {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  address: string;
  addressNumber: string;
  age: string;
  bio: string;
  cep: number;
  fullName: string;
  image: string;
  localy: string;
  phone: string;
  state: string;
  id: number;
}

export const UserRegister = async (
  dataUser: iRegisterData
): Promise<number | string> => {
  try {
    const { status } = await api.post<iResponse>("/register", dataUser);
    return status;
  } catch (error) {
    const err = error as AxiosError;
    localStorage.clear();
    return err.message;
  } finally {
  }
};
