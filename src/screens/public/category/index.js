import { useContext, useEffect } from "react";
import { CategoryCard } from "../../../componenets/categoryCard";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {
  CategoryMainContainer,
  CategoryText,
  ParallaxContainer,
  Row,
  TextBar,
} from "./styles";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { UserContext } from "../../../context/userContext";

const Category = () => {
  let navigate = useNavigate();
  const { categoryService } = useContext(ServiceLocator);
  const { setAppBarConfigs } = useContext(AppBarContext);

  const { authService } = useContext(ServiceLocator);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [categories, error, loading] = useFetch(
    categoryService.getAllCategories
  );

  const checkUser = async () => {
    if (currentUser) return;
    authService
      .getCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  };

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Categories", searchBar: false };
    });
    checkUser();
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
      <TextBar>Begin your shopping Journey Today</TextBar>

      <ParallaxContainer></ParallaxContainer>

      <CategoryText>Out Categories</CategoryText>

      <Row>
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
    </CategoryMainContainer>
  );
};

export { Category };
