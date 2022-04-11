import { useContext } from "react";
import { SearchBar } from "../../../componenets/atoms/searchBar";
import { ServiceLocator } from "../../../context/serviceProvider";
import { Bck } from "./style";

const Login = () => {
  const { authService } = useContext(ServiceLocator);

  return (
    <div>
      <h1>Login page</h1>

      <Bck>
        <SearchBar></SearchBar>
      </Bck>

      <button
        onClick={() => {
          authService.federatedSignIn();
        }}
      >
        sign in
      </button>

      <button
        onClick={() => {
          authService.signOut();
        }}
      >
        sign out
      </button>
    </div>
  );
};

export { Login };
