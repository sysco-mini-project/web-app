import { useContext } from "react";
import { ServiceLocator } from "../../../context/serviceProvider";

const Login = () => {
  const { authService } = useContext(ServiceLocator);

  return (
    <div>
      <h1>Login page</h1>

      <button
        onClick={() => {
          authService.federatedSignIn();
        }}
      >
        sign in
      </button>
    </div>
  );
};

export {Login}