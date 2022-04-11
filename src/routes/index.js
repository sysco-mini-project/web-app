import { Routes } from "react-router-dom";

import { Route } from "react-router";
import { Product } from "../screens/public/product";
import { Category } from "../screens/public/category";
import { Cart } from "../screens/private/cart";
import ProtectedRoute from "./protectedRoutes";
import { AddToCart } from "../screens/private/addtoCart";
import { LoginRequiredPage } from "../screens/public/loginrequired";

const Routers = () => {
  return (
    <Routes>
      <Route index exact path="/" element={<Category></Category>} />

      <Route index exact path="/categories" element={<Category></Category>} />

      <Route exact path="/products/:id" element={<Product></Product>} />

      <Route exact path="/loginRequired" element={<LoginRequiredPage />} />

      <Route
        exact
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/addToCart/:id"
        element={
          <ProtectedRoute>
            <AddToCart />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
