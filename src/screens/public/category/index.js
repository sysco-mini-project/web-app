import { useContext } from "react";
import { Loader } from "../../../componenets/loader";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { CategoryContainer } from "./styles";

const Category = () => {

  const { categoryService } = useContext(ServiceLocator);

  const [categories, error, loading] = useFetch(categoryService.getAllCategories)

  return (

    <CategoryContainer>

hello

    </CategoryContainer>
    // <div>
    //   <h1>This is category page</h1>

    //   {loading?  <Loader/> : (categories ?? [] ).map((d) => <li key={d.name}>{d.name}</li>)}
    // </div>
  );
};

export { Category };
