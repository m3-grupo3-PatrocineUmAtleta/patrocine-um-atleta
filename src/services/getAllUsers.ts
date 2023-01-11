import { iUser } from "../providers/User/interfaces";
import { api } from "./api";

export const getAllUsers = async (): Promise<iUser[]> => {
  try {
    const { data } = await api.get("/users");
 
    return data;
  } finally {
  }
};