import Routers from "../../routes";
import { AuthService } from "../../service/authService";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>

      <button
        onClick={() => {
          AuthService().federatedSignIn();
        }}
      >
        sign in
      </button>
      <Routers />
    </div>
  );
};

export { Home };
