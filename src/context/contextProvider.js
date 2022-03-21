import { AppBarConfigProvider } from "./appBarConfigProvider";
import DialogBoxProvider from "./dialogBoxProvider";
import { SearchValueProvider } from "./searchValueProvider";
import { ServiceProvider } from "./serviceProvider";
import { UserProvider } from "./userContext";

const ContextProvider = ({ children }) => {
  return (
    <DialogBoxProvider>
      <ServiceProvider>
        <AppBarConfigProvider>
          <SearchValueProvider>
            <UserProvider>{children}</UserProvider>
          </SearchValueProvider>
        </AppBarConfigProvider>
      </ServiceProvider>
    </DialogBoxProvider>
  );
};

export default ContextProvider;
