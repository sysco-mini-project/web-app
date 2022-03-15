import { createContext } from "react";
import { AuthService } from "../service/authService";
import { CategoryService } from "../service/categotyService";

export const ServiceLocator = createContext();

const authService = AuthService();
const categoryService = CategoryService();

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceLocator.Provider
      value={{
        authService,
        categoryService
      }}
    >
      {children}
    </ServiceLocator.Provider>
  );
};
