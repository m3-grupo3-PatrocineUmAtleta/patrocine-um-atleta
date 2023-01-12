import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { api } from "./api";

export interface iRegisterDataDonates {
  athleteId: number;
  amount: string;
  userId: number | undefined;
}

export const RegisterDonate = async ({
  athleteId,
  amount,
  userId,
}: iRegisterDataDonates): Promise<void | string> => {
  try {
    const response = await api.post(
      `users/${userId}/donates`,
      { athleteId, amount },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Token")}`,
        },
      }
    );
    ToastSucess("Doação feita com Sucesso!");
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    return err.message;
  }
};
