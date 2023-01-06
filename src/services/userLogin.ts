import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { iUser } from "../providers/User/interfaces";
import { api } from "./api";

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserLoginResponse {
  accessToken: string;
  user: iUser;
}

export const UserLogin = async (
  dataUser: iUserLogin
): Promise<iUser | undefined> => {
  try {
    const { data } = await api.post<iUserLoginResponse>("/login", dataUser);
    ToastSucess("Login feito com sucesso!");
    localStorage.setItem("@UserId", JSON.stringify(data.user.id));
    localStorage.setItem("@Token", data.accessToken);

    return data.user;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
  } finally {
  }
};
