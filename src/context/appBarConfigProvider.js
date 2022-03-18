import React, { createContext, useState } from "react";

export const AppBarContext = createContext();

// This context provider is passed to any component requiring the context
export const AppBarConfigProvider = ({ children }) => {
  const [appBarConfig, setAppBarConfigs] = useState({
    hide: true,
    name: "",
    searchBar: false,
    cartIcon: false,
    drawerWidth: 240
  });

  return (
    <AppBarContext.Provider
      value={{
        appBarConfig,
        setAppBarConfigs,
      }}
    >
      {children}
    </AppBarContext.Provider>
  );
};
