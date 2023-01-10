import { iSponsored } from "../providers/User/interfaces";
import { api } from "./api";


export const getUserLogged = async (): Promise<iSponsored[]> => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId")

    try {
        const response = await api.get("/users/" + userId, {
          headers: {
            authorization: `Bearer ${token}`,            
          },
        });

        return response.data.sponsoredAthletes
        
      } finally{}
};
