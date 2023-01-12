import { iFormDataEditUser } from "../components/Modal/Modais/UserDataEdit";
import { ToastSucess } from "../components/Toast";
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
}: iUpdateData): Promise<iUser | undefined> => {
  try {
    const response = await api.patch(`users/${idUser}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenLocal}`,
      },
    });

    ToastSucess("Alteração feita com Sucesso!");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
