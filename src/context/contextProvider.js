import { AppBarConfigProvider } from "./appBarConfigProvider";
import { ServiceProvider } from "./serviceProvider";
import { UserProvider } from "./userContext";

const ContextProvider = ({ children }) => {
  return (
    <ServiceProvider>
      <AppBarConfigProvider>
        <UserProvider>{children}</UserProvider>
      </AppBarConfigProvider>
    </ServiceProvider>
  );
};

export default ContextProvider;
