import { Avatar } from "@mui/material";
import { withTheme } from "styled-components";
import ItemCard from "../atoms/cards/card";
import { BaseCard, ButtomBar } from "./styles";
import Button from "@mui/material/Button";
import { CardTravel } from "@mui/icons-material";

const ProductCard = ({ item, width: w, height: h,  clickCb}) => {

  const avatar = <Avatar alt="Remy Sharp" src={item.producerImage} />;
  const title = item.producer;
  const subheader = `Rs : ${item.price} /=`

  const addToCartBtn = () => (
    <ButtomBar>
      <Button ariant="outlined" startIcon={<CardTravel />}  onClick = {() => {clickCb(item.id)}}>
        Add to Cart
      </Button>
    </ButtomBar>
  );

  return (
    <BaseCard key={item.id} height={h} width={w}>
      <ItemCard
        header={{ avatar, title, subheader }}
        image={item.image}
        className="box"
        height="194"
        description={item.name}
        Bottom={addToCartBtn}
      />
    </BaseCard>
  );
};

export { ProductCard };
