import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { useContext } from "react";

import { AppBarContext } from "../../context/appBarConfigProvider";

import { Category, LogoutSharp, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ProfileContainer } from "./styles";
import { UserContext } from "../../context/userContext";
import { orange } from "@mui/material/colors";
import { ServiceLocator } from "../../context/serviceProvider";

const CustomDrawer = () => {
  const navigate = useNavigate();

  const { authService } = useContext(ServiceLocator);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigateCb = (path) => () => {
    navigate(path);
  };

  const navigations = [
    {
      Icon: Category,
      name: "Categories",
      navigation: navigateCb("/categories"),
    },

    {
      Icon: ShoppingCart,
      name: "My Carts",
      navigation: navigateCb("/cart"),
    },

    {
      Icon: LogoutSharp,
      name: "Logout",
      navigation: async() => {
        await authService.signOut()
      },
    },
  ];

  const { appBarConfig } = useContext(AppBarContext);
  return (
    <Drawer
      sx={{
        width: appBarConfig.drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: appBarConfig.drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <ProfileContainer>
        <Avatar
          sx={{ bgcolor: orange[500], color: "white" }}
          aria-label="recipe"
        >
          {currentUser?.firstName?.charAt(0)?.toUpperCase()}
        </Avatar>

        <h3>
          {currentUser?.firstName} {currentUser?.lastName}
        </h3>
      </ProfileContainer>

      <Divider />
      <List>
        {navigations.map((item, index) => {
          const { Icon } = item;

          return (
            <ListItem button key={item.name} onClick={item.navigation}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export { CustomDrawer };
