import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthService } from "./service/authService";

const App = () => {
  const authService = AuthService();

  authService.initializeUiListner((data) => {
    console.log(data);

    authService
      .getCurrentUser()
      .then((res) => {
        console.log("current user");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <button
          onClick={() => {
            authService.federatedSignIn();
          }}
        >
          {" "}
          Signin
        </button>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
