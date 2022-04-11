import { useEffect } from "react";
import Routers from "../../routes";
import Layout from "../layout";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <main className="home-contents">
        <Routers></Routers>
      </main>
    </Layout>
  );
};

export { Home };
