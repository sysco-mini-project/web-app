import {
  AppBar,
  Avatar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useCallback, useContext } from "react";
import { AppBarContext } from "../../context/appBarConfigProvider";
import { SearchBar } from "../atoms/searchBar";
import { AppBarContainer } from "./styles";
import { OutLinedButton } from "../atoms/button/outLinedButton";
import { ServiceLocator } from "../../context/serviceProvider";
import { UserContext } from "../../context/userContext";
import { IcnButton } from "../atoms/button/iconButton";
import { orange, red } from "@mui/material/colors";

const CustomAppBar = (props) => {
  const { appBarConfig } = useContext(AppBarContext);
  const { authService } = useContext(ServiceLocator);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const signInCb = useCallback(() => {
    authService.federatedSignIn();
  }, []);

  return (
    <HideOnScroll {...props}>
      <AppBarContainer>
        <AppBar className="appBar">
          <Toolbar className="tb">
            <Typography variant="h6" component="div" className="comp">
              {appBarConfig.name ?? "App bar"}
            </Typography>

            {appBarConfig.searchBar ? <SearchBar /> : <></>}

            <div className="buttonBox">
              {currentUser ? (
                <Avatar
                  sx={{ bgcolor: "white", color: orange[500] }}
                  aria-label="recipe"
                >
                  {currentUser.firstName.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <OutLinedButton
                  name="Login"
                  size="large"
                  color="white"
                  backgroundColor="transparent"
                  clickCb={signInCb}
                />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </AppBarContainer>
    </HideOnScroll>
  );
};

export default CustomAppBar;
