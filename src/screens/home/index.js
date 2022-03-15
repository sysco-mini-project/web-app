import { useContext } from "react";
import { ServiceLocator } from "../../context/serviceProvider";
import Routers from "../../routes";
import { AuthService } from "../../service/authService";
import Layout from "../layout";

const Home = () => {
  const { authService } = useContext(ServiceLocator);

  return (
    <Layout>
      <main className="home-contents">
        <button
          onClick={() => {
            authService.federatedSignIn();
          }}
        >
          sign in
        </button>
        <Routers></Routers>
      </main>
    </Layout>

    // <div>
    //   <h1>This is Home page</h1>

    //   <button
    //     onClick={() => {
    //       AuthService().federatedSignIn();
    //     }}
    //   >
    //     sign in
    //   </button>
    //   <Routers />
    // </div>
  );
};

export { Home };
