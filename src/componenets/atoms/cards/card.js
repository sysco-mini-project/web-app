import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ItemCard = ({ header, image, description, actions = [] }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Header = () => {
    let component = <CardHeader />;

    if (header.avatar) {
      component = React.cloneElement(component, { avatar: header.avatar });
    }

    if (header.title) {
      component = React.cloneElement(component, { title: header.title });
    }

    if (header.subheader) {
      component = React.cloneElement(component, {
        subheader: header.subheader,
      });
    }

    return component;
  };

  return (
    <Card className="box">
      {header ? <Header /> : <></>}

      {image ? (
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
      ) : (
        <></>
      )}
      {description ? (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      ) : (
        <></>
      )}

      {actions.length > 0 ? (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ItemCard;
