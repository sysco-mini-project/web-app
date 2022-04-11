import { BASE_URL } from "../shared/Constants";
import { get } from "../shared/http/httpClient";

const CategoryService = () => {
  const getAllCategories = async () => {
    return await get(`${BASE_URL}/api/category/all`, { intecept: false });
  };

  return { getAllCategories };
};

export { CategoryService };
