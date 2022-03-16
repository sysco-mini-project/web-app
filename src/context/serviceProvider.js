import { createContext } from "react";
import { AuthService } from "../service/authService";
import { CategoryService } from "../service/categotyService";
import { ProductService } from "../service/productService";

export const ServiceLocator = createContext();

const authService = AuthService();
const categoryService = CategoryService();
const productService = ProductService()

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceLocator.Provider
      value={{
        authService,
        categoryService,
        productService
      }}
    >
      {children}
    </ServiceLocator.Provider>
  );
};
