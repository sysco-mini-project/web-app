import { useContext, useEffect } from "react";
import { AppBarContext } from "../../context/appBarConfigProvider";
import { ServiceLocator } from "../../context/serviceProvider";
import Routers from "../../routes";
import Layout from "../layout";

const Home = () => {

  const { setAppBarConfigs } = useContext(AppBarContext);

  useEffect(()=> {

  },[])


  return (
    <Layout>
      <main className="home-contents">
        <Routers></Routers>
      </main>
    </Layout>
  );
};

export { Home };
