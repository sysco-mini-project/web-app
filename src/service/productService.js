import { BASE_URL } from "../shared/Constants";
import { get } from "../shared/http/httpClient";

const ProductService = () => {
  const getAllProductsByCategory = async (id) => {
    return await get(`${BASE_URL}/api/product/all/${id}`, { intecept: false });
  };

  return { getAllProductsByCategory };
};

export { ProductService };
