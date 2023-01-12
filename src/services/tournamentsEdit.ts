import { AxiosError } from "axios";
import { iTournamentForm } from "../components/RenderContentSection/components/Tournaments";
import { ToastError, ToastSucess } from "../components/Toast";
import { api } from "./api";

export interface iRegisterData {
  idTournament: number | undefined;
  data: {
    date: string | undefined;
    status: "Participando" | "Finalizado" | undefined;
    rewards: string | undefined;
  };
}

export const TournamentsEditAPI = async ({
  data,
  idTournament,
}: iRegisterData): Promise<void | string> => {
  try {
    await api.patch(`tournament/${idTournament}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Token")}`,
      },
    });

    ToastSucess("Alteração feita com Sucesso!");
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    return err.message;
  }
};
