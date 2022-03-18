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
import { AppBarContainer, ShoppingCartContainer } from "./styles";
import { OutLinedButton } from "../atoms/button/outLinedButton";
import { ServiceLocator } from "../../context/serviceProvider";
import { UserContext } from "../../context/userContext";
import { IcnButton } from "../atoms/button/iconButton";
import { orange, red } from "@mui/material/colors";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const CustomAppBar = (props) => {
  const { appBarConfig } = useContext(AppBarContext);
  const { authService } = useContext(ServiceLocator);

  const navigate = useNavigate();

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

  const clickCart = useCallback(() => {
    navigate("/cart");
  }, []);

  return (
    <AppBarContainer>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${appBarConfig.drawerWidth}px)`,
          ml: `${appBarConfig.drawerWidth}px`,
        }}
      >
        <Toolbar className="tb">
          <Typography variant="h6" noWrap component="div" className="comp">
            {appBarConfig.name ?? "App bar"}
          </Typography>

          {appBarConfig.searchBar ? <div className="search-box"><SearchBar /> </div>: <></>}

          {currentUser ? (
            <div className="visible-to-logged-user">
      
              <Avatar
                sx={{ bgcolor: "white", color: orange[500] }}
                aria-label="recipe"
              >
                {currentUser.firstName.charAt(0).toUpperCase()}
              </Avatar>
            </div>
          ) : (
            <OutLinedButton
              name="Login"
              size="large"
              color="white"
              backgroundColor="transparent"
              clickCb={signInCb}
            />
          )}
        </Toolbar>
      </AppBar>
    </AppBarContainer>

    // <HideOnScroll {...props}>
    //   <AppBarContainer>
    //     <AppBar
    //       className="appBar"
    //       position="fixed"
    //       sx={{ width: `calc(100vw - 260px)`, ml: `260px` }}
    //     >
    //       <Toolbar className="tb">
    //         <Typography variant="h6" component="div" className="comp">
    //           {appBarConfig.name ?? "App bar"}
    //         </Typography>

    //         {appBarConfig.searchBar ? <SearchBar /> : <></>}

    //         <div className="buttonBox">
    //           {currentUser ? (
    //             <div className="visible-to-logged-user">
    //               {appBarConfig.cartIcon ? (
    //                 <ShoppingCartContainer onClick={clickCart}>
    //                   <ShoppingCart />
    //                 </ShoppingCartContainer>
    //               ) : (
    //                 <></>
    //               )}

    //               <Avatar
    //                 sx={{ bgcolor: "white", color: orange[500] }}
    //                 aria-label="recipe"
    //               >
    //                 {currentUser.firstName.charAt(0).toUpperCase()}
    //               </Avatar>
    //             </div>
    //           ) : (
    //             <OutLinedButton
    //               name="Login"
    //               size="large"
    //               color="white"
    //               backgroundColor="transparent"
    //               clickCb={signInCb}
    //             />
    //           )}
    //         </div>
    //       </Toolbar>
    //     </AppBar>
    //   </AppBarContainer>
    // </HideOnScroll>
  );
};

export default CustomAppBar;
