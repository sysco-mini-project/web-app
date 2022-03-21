import React, { createContext, useState } from "react";
export const DialogContext = createContext();

export const DialogBoxProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [Body, setBody] = useState(() => () => <></>);

  return (
    <DialogContext.Provider value={{ open, setOpen, setBody }}>
      {children}
      <Body />
    </DialogContext.Provider>
  );
};

export default DialogBoxProvider;
