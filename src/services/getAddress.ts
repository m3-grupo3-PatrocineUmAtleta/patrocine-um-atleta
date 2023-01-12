import { apiCEP } from "./api";

export interface iGetAddressProp {
  cep: number;
}

export interface iResponseAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
export const getAddress = async (
  cep: number
): Promise<iResponseAddress | undefined> => {
  try {
    const { data } = await apiCEP.get(cep + "/json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
