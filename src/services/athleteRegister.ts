import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import {
  iAthlete,
  iAthleteRegister,
  iUser,
} from "../providers/User/interfaces";
import { api } from "./api";

export interface iRegisterData {
  adminId: string | null;
  dataAthlete: iAthleteRegister;
  tokenLocal: string | null;
}

export interface iResponse {
  accessToken: string;
  user: iUser;
}

export const AthleteRegisterAPI = async (
  dataRegister: iRegisterData
): Promise<number | string> => {
  try {
    const { status } = await api.post(
      `/users/${dataRegister.adminId}/athlete`,
      dataRegister.dataAthlete,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataRegister.tokenLocal}`,
        },
      }
    );

    ToastSucess("Cadastro feito com Sucesso!");

    return status;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
    return err.message;
  }
};
