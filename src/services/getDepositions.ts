import { iDepositions } from "../userContext/interfaces";
import { api } from "./api";

export const getDepositions = async (): Promise<iDepositions[] | undefined> => {
  try {
    const response = await api.get("/deposition");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
