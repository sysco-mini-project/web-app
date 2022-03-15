import { ServiceProvider } from "./serviceProvider";
import { UserProvider } from "./userContext";

const ContextProvider = ({ children }) => {
  return (
    <ServiceProvider>
      <UserProvider>{children}</UserProvider>;
    </ServiceProvider>
  );
};

export default ContextProvider;
