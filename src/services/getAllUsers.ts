import { iUser } from "../UserContext/interfaces";
import { api } from "./api";

export const getAllUsers = async (): Promise<iUser[] | undefined> => {
  try {
    const { data } = await api.get("/users");

    return data;
  } catch (err) {
    console.log(err);
  }
};
