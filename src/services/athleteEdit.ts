import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { iAthleteEdit } from "../providers/User/interfaces";
import { api } from "./api";

export interface iRegisterData {
  idAthlete: number | null;
  data: iAthleteEdit;
  tokenLocal: string | null;
}

export const AthleteEditAPI = async ({
  data,
  idAthlete,
  tokenLocal,
}: iRegisterData): Promise<void | string> => {
  try {
    await api.put(`athlete/${idAthlete}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenLocal}`,
      },
    });

    ToastSucess("Alteração feita com Sucesso!");
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    return err.message;
  }
};
