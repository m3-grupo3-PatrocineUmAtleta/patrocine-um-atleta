import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-fakeapi-adoteumatleta.onrender.com/",
  timeout: 5000,
});

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 5000,
});
