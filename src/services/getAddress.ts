import { AxiosError } from "axios";
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
  message?: string;
}

export const getAddress = async (cep: number): Promise<iResponseAddress> => {
  try {
    const response = await apiCEP.get(cep + "/json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } finally {
  }
};