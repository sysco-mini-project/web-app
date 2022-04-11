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
import { BottomBar } from "./styles";

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

const DefaultBottom = () => <></>;

const ItemCard = ({
  header,
  image,
  description,
  height = 194,
  Bottom = DefaultBottom,
  Action = <></>
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Header = () => {
    let component = <CardHeader/>;

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

    if(Action){
      component = React.cloneElement(component, {
        action: Action,
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
          height={height}
          image={image}
          alt="Paella dish"
          sx = {{backgroundPosition: 'contain'}}
        />
      ) : (
        <></>
      )}
      {description ? (
        <CardContent sx={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent: 'center'}}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      ) : (
        <></>
      )}

      {Bottom ? <BottomBar>{Bottom()}</BottomBar> : <></>}
    </Card>
  );
};

export default ItemCard;
