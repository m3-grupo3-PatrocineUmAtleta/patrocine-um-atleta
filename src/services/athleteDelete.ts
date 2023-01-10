import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { api } from "./api";

export interface iRegisterData {
  idAthlete: number | null;
  tokenLocal: string | null;
}

export const AthleteDeleteAPI = async ({
  idAthlete,
  tokenLocal,
}: iRegisterData): Promise<number | string> => {
  try {
    const { status } = await api.delete(`athlete/${idAthlete}`, {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    });

    ToastSucess("Atleta excluído com sucesso!");

    return status;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
    return err.message;
  }
};
