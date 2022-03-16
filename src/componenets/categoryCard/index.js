import { useState } from "react";
import { IcnButton } from "../atoms/button/iconButton";
import ItemCard from "../atoms/cards/card";
import { BaseCard } from "./styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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
            icon={ShoppingBagIcon}
            cb={cb}
          ></IcnButton>
        </div>
      ) : (
        <></>
      )}
    </BaseCard>
  );
};

export { CategoryCard };
