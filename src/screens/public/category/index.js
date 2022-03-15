import { useContext } from "react";
import ItemCard from "../../../componenets/atoms/cards/card";
import { Loader } from "../../../componenets/loader";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import {
  CategoryContainer,
  CategoryMainContainer,
  CategoryText,
  ParallaxContainer,
  Row,
  TextBar,
} from "./styles";

const Category = () => {
  const { categoryService } = useContext(ServiceLocator);

  const [categories, error, loading] = useFetch(
    categoryService.getAllCategories
  );

  const constructCardItem = (category) => {
    const header = {
      title: category.name,
    };
    const image = category.imageUrl;
    return { header, image };
  };

  return (
    <CategoryMainContainer>
      <ParallaxContainer></ParallaxContainer>
      <TextBar>Begin your shopping Journey Today</TextBar>

      <CategoryText>Out Categories</CategoryText>
      <CategoryContainer>
        <Row>
          {" "}
          {(categories ?? []).map((category) => {
            const constr = constructCardItem(category);

            return (
              <ItemCard
                key={category.id}
                header={constr.header}
                image={constr.image}
              />
            );
          })}
        </Row>
      </CategoryContainer>
    </CategoryMainContainer>

    // <div>
    //   <h1>This is category page</h1>

    //   {loading?  <Loader/> : (categories ?? [] ).map((d) => <li key={d.name}>{d.name}</li>)}
    // </div>
  );
};

export { Category };
