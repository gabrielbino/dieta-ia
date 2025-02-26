import axios from "axios";

// http://192.168.3.4:3333/create
export const api = axios.create({
  baseURL: "http://192.168.3.4:3333"
})