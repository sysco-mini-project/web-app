import React, { Component } from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { Home } from "./screens/home";
import { ServiceLocator } from "./context/serviceProvider";
import { AppBarContext } from "./context/appBarConfigProvider";

const App = () => {
  const { authService } = useContext(ServiceLocator);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setAppBarConfigs } = useContext(AppBarContext);

  authService.initializeUiListner((data) => {
    console.log(data);
    authService
      .getCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
        setAppBarConfigs((prev) => {
          return { ...prev, searchBar: false, drawerWidth: 240 };
        });
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  });

  return <Home></Home>;
};

export default App;
