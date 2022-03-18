import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import { AppBarContext } from "../../context/appBarConfigProvider";

import { ShoppingBag } from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomDrawer = () => {
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
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <ShoppingBag />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <ShoppingBag />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export { CustomDrawer };
