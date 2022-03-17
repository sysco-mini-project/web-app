import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useContext } from "react";
import { AppBarContext } from "../../context/appBarConfigProvider";
import { SearchBar } from "../atoms/searchBar";
import { AppBarContainer } from "./styles";

const CustomAppBar = (props) => {
  const { appBarConfig } = useContext(AppBarContext);

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

  return (
    <HideOnScroll {...props}>
      <AppBarContainer>
        <AppBar className="appBar">
          <Toolbar className="tb">
            <Typography variant="h6" component="div" className="comp">
              {appBarConfig.name ?? "App bar"}
            </Typography>

            {appBarConfig.searchBar ? <SearchBar /> : <></>}
          </Toolbar>
        </AppBar>
      </AppBarContainer>
    </HideOnScroll>
  );
};

export default CustomAppBar;
