import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { CartItemContainer } from "./styles";
import { Avatar, ListItemAvatar } from "@mui/material";

const CustomListItem = ({
  id,
  image,
  title,
  subTitle,
  rest,
  color,
  onCartListItemClicked = (id) => {},
  width,
  secondaryAction = <></>
}) => {
  
  return (
    <CartItemContainer
      key={id}
      color={color}
      width={width}
      onClick={() => {
        onCartListItemClicked(id);
      }}
    >
      <ListItem
        alignItems="flex-start"
        secondaryAction={secondaryAction}
      >
        {image ? (
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={image} />
          </ListItemAvatar>
        ) : (
          <></>
        )}
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
    </CartItemContainer>
  );
};

export { CustomListItem };
