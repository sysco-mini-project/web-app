import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CartItemContainer } from "./styles";

const CustomListItem = ({ id, image, title, subTitle, rest, color, onCartListItemClicked }) => {
  return (
    <CartItemContainer key={id} color = {color} onClick = {() => {
        onCartListItemClicked(id)
    }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {subTitle}
              </Typography>
              {rest}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </CartItemContainer>
  );
};

export { CustomListItem };
