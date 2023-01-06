import { useContext } from "react";
import { UserContext } from "../providers/User";
import { iAthlete } from "../providers/User/interfaces";
import { api } from "./api"

export const getAllAthletes = async (): Promise<void> => {
  const {setAllAthletes} = useContext(UserContext)

  try {
    const allAthletes: iAthlete[] = await api.get("/athlete/");
    setAllAthletes(allAthletes);

  } catch (error) {
    console.log(error)
  }
}