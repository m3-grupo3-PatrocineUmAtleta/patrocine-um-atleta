import { useContext } from "react";
import { UserContext } from "../providers/User";
import { iAthlete } from "../providers/User/interfaces";
import { api } from "./api";

export const getAthletesById = async (id: number): Promise<any> => {
  const { setAthletes } = useContext(UserContext);

  try {
    const reponse: iAthlete[] = await api.get(`/athlete/${id}`);
    setAthletes(reponse);
  } catch (error) {
    console.log(error);
  }
};
