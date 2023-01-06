import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 5000,
});
