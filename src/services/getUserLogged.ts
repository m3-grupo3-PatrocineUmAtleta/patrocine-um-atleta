import { iSponsored, iUser } from "../providers/User/interfaces";
import { api } from "./api";

export const getUserLogged = async (): Promise<iSponsored[] | undefined> => {
  const token = localStorage.getItem("@Token");
  const userId = localStorage.getItem("@UserId");

  try {
    const response = await api.get("/users/" + userId, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return response.data.sponsored;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (): Promise<iUser | undefined> => {
  const token = localStorage.getItem("@Token");
  const userId = localStorage.getItem("@UserId");

  try {
    const { data } = await api.get("/users/" + userId, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
