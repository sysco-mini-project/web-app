import { createContext } from "react";
import { AuthService } from "../service/authService";
import { CartService } from "../service/cartService";
import { CategoryService } from "../service/categotyService";
import { ProductService } from "../service/productService";

export const ServiceLocator = createContext();

const authService = AuthService();
const categoryService = CategoryService();
const productService = ProductService();
const cartService = CartService();

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceLocator.Provider
      value={{
        authService,
        categoryService,
        productService,
        cartService,
      }}
    >
      {children}
    </ServiceLocator.Provider>
  );
};
