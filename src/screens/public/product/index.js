import { useCallback, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../../componenets/productCard";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { SearchValueContext } from "../../../context/SearchValueProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { ProductContainer, ProductMainWrapper, Row, StickDiv } from "./styles";

const Product = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firstUpdate = useRef(true);

  const { productService } = useContext(ServiceLocator);
  const { setAppBarConfigs } = useContext(AppBarContext);
  const { searchValue } = useContext(SearchValueContext);

  const fetchData = useCallback(
    async () => await productService.getAllProductsByCategory(params.id),
    []
  );

  const [products, error, loading, setData, setLoading] = useFetch(fetchData);

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Products -> ", searchBar: true, cartIcon: true };
    });
  }, []);

  //Listerner to the search value
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (searchValue && searchValue.text && searchValue.text.trim()) {
      productService
        .searchProducByName(params.id, searchValue.text)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (searchValue && !searchValue.btnState) {
      productService
        .getAllProductsByCategory(params.id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchValue]);

  const clickCb = useCallback((id) => {
    navigate(`/addToCart/${id}`);
  }, null);
  return (
    <ProductMainWrapper>
      <Row>
        {(products ?? []).map((item) => {
          return ProductCard({
            item,
            height: "320px",
            width: "300px",
            clickCb,
          });
        })}
      </Row>
    </ProductMainWrapper>
  );
};

export { Product };
