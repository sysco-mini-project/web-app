import axios from "axios";
import { AuthService } from "../../service/authService";

const reqHandler = async (request) => {
  const accessToken = await AuthService().getAccessToken();

  request.headers.authorization = "Bearer " + accessToken;

  return request;
};

const errHandler = (error) => {
  return Promise.reject(error);
};

const client = (
  intecept,
  requestHandler = reqHandler,
  errorHandler = errHandler
) => {
  const baseClient = axios.create({});

  if (intecept) {
    baseClient.interceptors.request.use(requestHandler, errorHandler);
  }

  return baseClient;
};

export default client;
