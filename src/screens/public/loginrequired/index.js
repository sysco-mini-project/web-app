import { useContext, useEffect } from "react";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { LoginRequiredContainer, MessageBox } from "./styles";

const LoginRequiredPage = () => {
  const { setAppBarConfigs } = useContext(AppBarContext);

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "", searchBar: false };
    });
  }, []);

  return (
    <LoginRequiredContainer>
      <MessageBox>
        <h1>Login is required.</h1>
        <h2>Please Log in and try again</h2>
      </MessageBox>
    </LoginRequiredContainer>
  );
};

export { LoginRequiredPage };
