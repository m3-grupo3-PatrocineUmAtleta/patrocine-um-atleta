import { iAthlete } from "../providers/User/interfaces";
import { api } from "./api";

export const getAllAthletes = async (): Promise<iAthlete[]> => {
  try {
    const { data } = await api.get("/athlete/");
    return data;
  } finally {
  }
};
