import { api } from "./api";

export interface iResponseDonates {
  athleteId: number;
  amount: number | string;
  userId: string;
  id: number;
}
export const getDonations = async (): Promise<
  iResponseDonates[] | undefined
> => {
  try {
    const { data } = await api.get("/donates");
    return data;
  } catch (err) {
    console.log(err);
  }
};
