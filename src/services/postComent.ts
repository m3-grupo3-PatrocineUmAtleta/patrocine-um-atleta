import { AxiosError } from "axios";
import { ToastSucess, ToastError } from "../components/Toast";
import { api } from "./api";

export interface iDataDeposition {
  athleteId: number;
  content: string;
}

interface iPostDepositionProps {
  data: iDataDeposition;
  userId: string | null;
  localToken: string | null;
}

export const postDeposition = async ({
  data,
  userId,
  localToken,
}: iPostDepositionProps) => {
  try {
    const response = await api.post(`/users/${userId}/deposition`, data, {
      headers: {
        authorization: `Bearer ${localToken}`,
        "Content-Type": "application/json",
      },
    });

    ToastSucess("comentário feito! Obrigado!");
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
  } finally {
  }
};
