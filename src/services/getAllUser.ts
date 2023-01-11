import { iUser } from "../providers/User/interfaces";
import { api } from "./api";

export const getAllUser = async (): Promise<iUser | undefined> => {
  try {
    const { data } = await api.get("/users/1");

    return data;
  } catch (error) {
    console.log(error);
  }
};
