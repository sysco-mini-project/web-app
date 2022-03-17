import { useContext, useEffect } from "react";
import { CategoryCard } from "../../../componenets/categoryCard";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {
  CategoryContainer,
  CategoryMainContainer,
  CategoryText,
  ParallaxContainer,
  Row,
  TextBar,
} from "./styles";
import { AppBarContext } from "../../../context/appBarConfigProvider";

const Category = () => {
  let navigate = useNavigate();
  const { categoryService } = useContext(ServiceLocator);
  const { setAppBarConfigs } = useContext(AppBarContext);

  const [categories, error, loading] = useFetch(
    categoryService.getAllCategories
  );


  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Categories" };
    });
  }, []);


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
              <CategoryCard
                key={category.id}
                header={constr.header}
                image={constr.image}
                cb={() => {
                  navigate(`/products/${category.id}`);
                }}
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
