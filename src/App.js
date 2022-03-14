import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./wrapper/aws/authProviderService";

const App = () => {
  const authProvider = AuthProvider();

  authProvider.initializeUiListner((data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <button
          onClick={() => {
            authProvider.federatedSignIn();
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
