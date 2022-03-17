import { BASE_URL } from "../shared/Constants";
import { get, post } from "../shared/http/httpClient";

const CartService = () => {
  const getAllUserCarts = async () => {
    return await get(`${BASE_URL}/api/cart/user-carts`, {});
  };

  const createCart = async (body) => {
    return await post(`${BASE_URL}/api/cart/create`, body, {});
  };

  return { getAllUserCarts, createCart };
};

export { CartService };
