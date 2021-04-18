import axios from "axios";
import { create } from "apisauce";
import { findToken } from "./userLogger";
const { REACT_APP_Server_URL } = process.env;

const axiosApi = axios.create({
  baseURL: REACT_APP_Server_URL,
});

axios.interceptors.request.use((req) => {
  const foundToken = findToken();

  if (foundToken) {
    console.log("token Added !");
    req.headers["x-auth-token"] = foundToken;
    return req;
  } else return req;
});

const api = create({
  baseURL: REACT_APP_Server_URL,
});

const foundToken = findToken();
api.setHeader("x-auth-token", foundToken);

// eslint-disable-next-line
export default { apiSauce: api, axiosApi: axiosApi };
