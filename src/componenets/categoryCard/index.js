import { useState } from "react";
import { IcnButton } from "../atoms/button/iconButton";
import ItemCard from "../atoms/cards/card";
import { BaseCard } from "./styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { AddShoppingCart } from "@mui/icons-material";

const CategoryCard = ({ id, header: head, image: img, cb }) => {
  const [show, setShow] = useState(false);

  return (
    <BaseCard
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <ItemCard key={id} header={head} image={img} className="box" />

      {show ? (
        <div className="box stack-top">
          <IcnButton
            id="category-id"
            label="view"
            icon={AddShoppingCart}
            cb={cb}
            size="large"
            backgroundColor="orange"
            color="white"
          ></IcnButton>
        </div>
      ) : (
        <></>
      )}
    </BaseCard>
  );
};

export { CategoryCard };
