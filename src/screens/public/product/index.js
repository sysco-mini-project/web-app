import { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../../componenets/productCard";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { ProductContainer, ProductMainWrapper, Row, StickDiv } from "./styles";

const Product = () => {
  let params = useParams();
  let navigate = useNavigate();

  const { productService } = useContext(ServiceLocator);
  const { setAppBarConfigs } = useContext(AppBarContext);

  const fetchData = useCallback(
    async () => await productService.getAllProductsByCategory(params.id),
    []
  );

  const [products, error, loading] = useFetch(fetchData);

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Products -> " , searchBar : true, cartIcon: true};
    });
  }, []);

  const clickCb = useCallback((id) => {

    navigate(`/addToCart/${id}`);

  }, null)
  return (
    <ProductMainWrapper>
      <ProductContainer>
        <Row>
          {(products ?? []).map((item) => {
            return ProductCard({ item, height: "345px", width: "345px" , clickCb});
          })}
        </Row>
      </ProductContainer>
    </ProductMainWrapper>
  );
};

export { Product };
