import { createContext } from "react";
import { AuthService } from "../service/authService";

export const ServiceLocator = createContext();

const authService = AuthService();

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceLocator.Provider
      value={{
        authService,
      }}
    >
      {children}
    </ServiceLocator.Provider>
  );
};
