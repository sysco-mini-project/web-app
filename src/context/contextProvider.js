import { UserProvider } from "./userContext";


const ContextProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextProvider;
