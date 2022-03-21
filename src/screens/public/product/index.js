import { LinearProgress } from "@mui/material";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../../componenets/productCard";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { SearchValueContext } from "../../../context/searchValueProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { UserContext } from "../../../context/userContext";
import { useFetch } from "../../../hooks/useFetch";
import { ProductMainWrapper, Row } from "./styles";

const Product = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firstUpdate = useRef(true);

  const { productService } = useContext(ServiceLocator);
  const { setAppBarConfigs } = useContext(AppBarContext);
  const { text, btnState } = useContext(SearchValueContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { authService } = useContext(ServiceLocator);

  const fetchData = useCallback(
    async () => await productService.getAllProductsByCategory(params.id),
    []
  );

  const [products, error, loading, setData, setLoading] = useFetch(fetchData);

  const checkUser = async () => {
    if (currentUser) return;
    authService
      .getCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
        setAppBarConfigs((prev) => {
          return { ...prev, drawerWidth: 240 };
        });
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  };

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Products", searchBar: true };
    });
    checkUser();
  }, []);

  //Listerner to the search value
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (text && text?.trim()) {
      productService
        .searchProducByName(params.id, text.trim())
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [text]);

  //Listerner to the search value
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!btnState) {
      productService
        .getAllProductsByCategory(params.id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [btnState]);

  const clickCb = useCallback((id) => {
    navigate(`/addToCart/${id}`);
  }, null);
  return (
    <ProductMainWrapper>
      <Row>
        {(products ?? []).length === 0 ? (
          <h2>No products available....</h2>
        ) : (products ?? []).length > 0 ? (
          (products ?? []).map((item) => {
            return ProductCard({
              item,
              height: "320px",
              width: "300px",
              clickCb,
            });
          })
        ) : (
          <LinearProgress />
        )}
        {}
      </Row>
    </ProductMainWrapper>
  );
};

export { Product };
