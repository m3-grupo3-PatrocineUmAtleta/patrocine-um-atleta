import { iAthlete } from "../UserContext/interfaces";
import { api } from "./api";

export const getAthletesById = async (
  id: number | string
): Promise<iAthlete | undefined> => {
  try {
    const { data } = await api.get(`/athlete/${id}`);
    localStorage.setItem("@SelectedAthlete", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};
