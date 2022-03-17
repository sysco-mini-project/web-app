import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppBarContext } from "../../../context/appBarConfigProvider";

const AddToCart = () => {
  let params = useParams();
  const { setAppBarConfigs } = useContext(AppBarContext);

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Add to Cart" , searchBar : false};
    });
  }, []);



  return (
    <div>
      <h1>Add to cart page {params.id}</h1>
    </div>
  );
};

export { AddToCart };
