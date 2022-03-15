import React, { Component } from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { Home } from "./screens/home";
import { ServiceLocator } from "./context/serviceProvider";

const App = () => {
  const { authService } = useContext(ServiceLocator);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  authService.initializeUiListner((data) => {
    console.log("in the app.js **********************");
    console.log(data);

    authService
      .getCurrentUser()
      .then((res) => {
        console.log("current user");
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  });

  return (
    <Home></Home>

    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to {currentUser?.firstName ?? "React"}</h2>
    //     <button
    //       onClick={() => {
    //         authService.federatedSignIn();
    //       }}
    //     >
    //       {" "}
    //       Signin
    //     </button>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
};

export default App;
