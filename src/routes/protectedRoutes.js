import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "../componenets/loader";
import { UserContext } from "../context/userContext";
import { ServiceLocator } from "../context/serviceProvider";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { authService } = useContext(ServiceLocator);

  useEffect(() => {
    let isMounted = true;
    if (!currentUser) {
      authService.getCurrentUser().then(
        (user) => {
          // const result = validateRole(user);
          const result = true;
          if (isMounted && result) {
            setAuthenticated(true);
            setLoading(false);
            setCurrentUser(user);
          } else {
            alert("You do not have administration permission");
            setAuthenticated(false);
            setLoading(false);
          }
        },
        (err) => {
          if (isMounted) {
            setAuthenticated(false);
            setLoading(false);
          }
          throw err;
        }
      );
    } else {
      setLoading(false);
      setAuthenticated(true);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const validateRole = (user) => {
    if (role.length === 0) return true;

    const res = user.roles.filter((item) => role.includes(item));
    if (res.length === 0) {
      return false;
    }

    return true;
  };

  return isAuthenticated ? (
    children
  ) : isLoading ? (
    <Loader />
  ) : (
    <Navigate to="/home" />
  );
  // <Route path = "/hello" element = {<Component />}/>
  //    <Route
  //   {...rest}
  //   element={() =>
  //     isAuthenticated ? (
  //       <Component {...{ ...props, history }} />
  //     ) : isLoading ? (
  //       <Loader />
  //     ) : (
  //       <Navigate
  //         to={{
  //           pathname: "/categories",
  //           state: { from: props.location },
  //         }}
  //       />
  //     )
  //   }
  // />
};

export default ProtectedRoute;
