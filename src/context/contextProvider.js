import { AppBarConfigProvider } from "./appBarConfigProvider";
import { SearchValueProvider } from "./SearchValueProvider";
import { ServiceProvider } from "./serviceProvider";
import { UserProvider } from "./userContext";

const ContextProvider = ({ children }) => {
  return (
    <ServiceProvider>
      <AppBarConfigProvider>
        <SearchValueProvider>
          <UserProvider>{children}</UserProvider>
        </SearchValueProvider>
      </AppBarConfigProvider>
    </ServiceProvider>
  );
};

export default ContextProvider;
