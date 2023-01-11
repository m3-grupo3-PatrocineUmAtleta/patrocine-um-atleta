import { AxiosError } from "axios";
import { iFormDataEditUser } from "../components/Modal/Modais/UserDataEdit";
import { ToastError, ToastSucess } from "../components/Toast";
import { iUser } from "../providers/User/interfaces";
import { api } from "./api";

export interface iUpdateData {
  idUser: number | undefined;
  data: iFormDataEditUser;
  tokenLocal: string | null;
}

export const UserEditAPI = async ({
  data,
  idUser,
  tokenLocal,
}: iUpdateData): Promise<iUser> => {
  try {
    const response = await api.patch(`users/${idUser}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenLocal}`,
      },
    });

    ToastSucess("Alteração feita com Sucesso!");
    return response.data;
  } finally {
  }
};
