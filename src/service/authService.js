import { BASE_URL } from "../shared/Constants";
import {get} from "../shared/http/httpClient";
import { AuthProvider } from "../wrapper/aws/authProviderService";

const AuthService = () => {

  const authProvider = AuthProvider()

  const initializeUiListner = (cb) => {
    authProvider.initializeUiListner(cb);
  };

  const federatedSignIn = () => {
    authProvider.federatedSignIn();
  };

  const getAccessToken = async() => {
    return await authProvider.getAccessToken()
  }

  const getCurrentUser = async() => {
    return await get(`${BASE_URL}/api/auth/account`)
  }

  return { initializeUiListner, federatedSignIn, getCurrentUser, getAccessToken };
};


export {AuthService}