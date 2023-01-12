import { iTournament } from "../userContext/interfaces";
import { api } from "./api";

export const getTournaments = async (): Promise<iTournament[] | undefined> => {
  try {
    const { data } = await api.get("/tournament");
    return data;
  } catch (err) {
    console.log(err);
  }
};
