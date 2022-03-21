import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppBarContext } from "../../context/appBarConfigProvider";
import { SearchBar } from "../atoms/searchBar";
import { AppBarContainer } from "./styles";
import { OutLinedButton } from "../atoms/button/outLinedButton";
import { ServiceLocator } from "../../context/serviceProvider";
import { UserContext } from "../../context/userContext";
import { orange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { SearchValueContext } from "../../context/SearchValueProvider";
import { IcnButton } from "../atoms/button/iconButton";
import { ArrowCircleLeft } from "@mui/icons-material";

const CustomAppBar = (props) => {
  const { appBarConfig } = useContext(AppBarContext);
  const { authService } = useContext(ServiceLocator);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const signInCb = useCallback(() => {
    authService.federatedSignIn();
  }, []);

  //display drawer
  useEffect(() => {
    if (currentUser?.id) {
      setDrawerWidth(240);
    }
  }, [currentUser]);

  return (
    <AppBarContainer>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "orange",
        }}
      >
        <Toolbar className="tb">
          <IcnButton
            icon={ArrowCircleLeft}
            size="medium"
            backgroundColor="orange"
            color="white"
            cb={() => navigate(-1)}
          />

          <Typography variant="h6" noWrap component="div" className="comp">
            {appBarConfig.name ?? "App bar"}
          </Typography>

          {appBarConfig.searchBar ? (
            <div className="search-box">
              <SearchBar />{" "}
            </div>
          ) : (
            <></>
          )}

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
