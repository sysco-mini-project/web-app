import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

import { Switch, Route } from "react-router";
import { Product } from "../screens/public/product";
import { Category } from "../screens/public/category";
import { Cart } from "../screens/private/cart";
import ProtectedRoute from "./protectedRoutes";
import { Login } from "../screens/public/login/login";
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
