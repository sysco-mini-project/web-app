import { LinearProgress } from "@mui/material";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../../componenets/productCard";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { SearchValueContext } from "../../../context/searchValueProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { UserContext } from "../../../context/userContext";
import { useFetch } from "../../../hooks/useFetch";
import { ProductHeader, ProductMainWrapper, Row } from "./styles";

const Product = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firstUpdate = useRef(true);

  const [category, setCategory] = useState("");
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
      })
      .catch((err) => {
        console.log("error occurred in getting current user");
        console.log(err);
      });
  };

  const getCategory = async (id) => {
    await productService
      .getCategoryById(id)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log("error occured in getting category by id");
      });
  };


  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Products", searchBar: true };
    });
    getCategory(params.id);
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
      <ProductHeader>
        <div className="name">Category / {category?.name}</div>
      </ProductHeader>

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
