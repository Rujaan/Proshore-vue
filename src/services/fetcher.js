import axios from "axios";

let BASE_URL = " http://localhost:3000";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
