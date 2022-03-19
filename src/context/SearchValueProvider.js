import React, { createContext, useState } from "react";

export const SearchValueContext = createContext();

// This context provider is passed to any component requiring the context
export const SearchValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState({text : '', btnState : true});

  return (
    <SearchValueContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchValueContext.Provider>
  );
};
