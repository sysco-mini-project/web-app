import React, { createContext, useState } from "react";

export const SearchValueContext = createContext();

// This context provider is passed to any component requiring the context
export const SearchValueProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [btnState, setBtnState] = useState(true);

  return (
    <SearchValueContext.Provider
      value={{
        text,
        setText,
        btnState,
        setBtnState,
      }}
    >
      {children}
    </SearchValueContext.Provider>
  );
};
