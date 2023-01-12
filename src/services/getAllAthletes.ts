import { iAthlete } from "../providers/User/interfaces";
import { api } from "./api";

export const getAllAthletes = async (): Promise<iAthlete[] | undefined> => {
  try {
    const { data } = await api.get("/athlete/");

    return data;
  } catch (err) {
    console.log(err);
  }
};
