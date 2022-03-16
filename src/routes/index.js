import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

import { Switch, Route } from "react-router";
import { Product } from "../screens/public/product";
import { Category } from "../screens/public/category";
import { Cart } from "../screens/private/cart";
import ProtectedRoute from "./protectedRoutes";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/categories" element={<Category></Category>} />

        <Route exact path="/products/:id" element={<Product></Product>} />

        <Route
          exact
          path="/card"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
