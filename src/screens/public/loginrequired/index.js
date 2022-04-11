import { useContext, useEffect } from "react";
import { OutLinedButton } from "../../../componenets/atoms/button/outLinedButton";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { LoginRequiredContainer, MessageBox } from "./styles";

const LoginRequiredPage = () => {
  const { setAppBarConfigs } = useContext(AppBarContext);
  const { authService } = useContext(ServiceLocator);

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

        <OutLinedButton
          name="Login"
          backgroundColor="orange"
          color="white"
          clickCb={() => {
            authService.federatedSignIn();
          }}
        >
          sign in
        </OutLinedButton>
      </MessageBox>
    </LoginRequiredContainer>
  );
};

export { LoginRequiredPage };
