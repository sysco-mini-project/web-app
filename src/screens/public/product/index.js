import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../../componenets/productCard";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { ProductContainer, ProductMainWrapper, Row } from "./styles";

const Product = () => {
  let params = useParams();

  const { productService } = useContext(ServiceLocator);

  const [products, error, loading] = useFetch(
    async () => await productService.getAllProductsByCategory(params.id)
  );

  return (
    <ProductMainWrapper>
      <ProductContainer>
        <Row>
          {(products ?? []).map((item) => {
            return ProductCard({item, height : "345px", width: "345px"});
          })}
        </Row>
      </ProductContainer>
    </ProductMainWrapper>
    // <div>
    //   <h1>This is Product page</h1>

    //   {products && products.length == 0 ? (
    //     <h1>Loading</h1>
    //   ) : (
    //     <h1>data loader</h1>
    //   )}
    // </div>
  );
};

export { Product };
