import { useContext } from "react";
import { UserContext } from "../providers/User";
import { iAthlete } from "../providers/User/interfaces";
import { api } from "./api";

export const getAthletesById = async (id: number): Promise<any> => {
  const { setAthletes } = useContext(UserContext);

  try {
    const response: iAthlete[] = await api.get(`/athlete/${id}`);
    console.log(response);
    setAthletes(response);
  } catch (error) {
    console.log(error);
  }
};
