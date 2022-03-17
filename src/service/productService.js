import { BASE_URL } from "../shared/Constants";
import { get } from "../shared/http/httpClient";

const ProductService = () => {
  const getAllProductsByCategory = async (id) => {
    return await get(`${BASE_URL}/api/product/all/${id}`, { intecept: false });
  };

  const getProductById = async (id) => {
    return await get(`${BASE_URL}/api/product/${id}`, { intecept: false });
  };

  const getCategoryById = async (id) => {
    return await get(`${BASE_URL}/api/category/${id}`, { intecept: false });
  };

  return { getAllProductsByCategory, getProductById, getCategoryById };
};

export { ProductService };
