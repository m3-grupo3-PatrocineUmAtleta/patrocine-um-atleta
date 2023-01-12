import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { iTournament } from "../providers/User/interfaces";
import { api } from "./api";

interface idataRegisterTournaments {
  data: iTournament;
}
export const RegisterTournaments = async ({
  data,
}: idataRegisterTournaments): Promise<undefined | string> => {
  try {
    await api.post(`users/1/tournament`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Token")}`,
      },
    });
    ToastSucess("Cadastro feito com sucesso!");
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    return err.message;
  }
};
