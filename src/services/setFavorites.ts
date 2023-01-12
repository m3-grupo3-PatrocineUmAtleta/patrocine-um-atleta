import { iAthlete, iUser } from "../providers/User/interfaces";
import { api } from "./api";

export const setFavorites = async (
  data: iAthlete[],
  idUser: number | undefined,
  tokenLocal: string | null
): Promise<iUser | undefined> => {
  try {
    const response = await api.patch(
      `users/${idUser}`,
      { favorites: data },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenLocal}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
