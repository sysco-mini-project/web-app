import { DeleteForever, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { CustomListItem } from "../../../componenets/listItem";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";
import { MainCartContainer, RightMainContainer } from "./styles";

const Cart = () => {
  const { setAppBarConfigs } = useContext(AppBarContext);
  const { productService, cartService } = useContext(ServiceLocator);

  const [cartId, setCartId] = useState(0);
  const [cart, setCart] = useState(null);

  const getUserCarts = async () => {
    return await cartService.getAllUserCarts();
  };

  const [carts, error, loading, setData, setLoading] = useFetch(
    useCallback(async () => {
      const carts = await getUserCarts();
      return carts;
    }, [])
  );

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    setAppBarConfigs((prev) => {
      return { ...prev, name: "My Carts", searchBar: false, cartIcon: false };
    });

    return () => {
      mounted.current = false;
    };
  }, []);

  const getCartById = async (id) => {
    return await cartService
      .getCartByid(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        alert("error in getting cart");
      });
  };

  const onCartListItemClicked = useCallback(async (id) => {
    setCart(null);
    setLoading(true);
    const result = await getCartById(id);
    if (mounted.current) {
      setCartId(id);
      setCart(result);
      setLoading(false);
    }
  }, []);

  const LeftContainer = () => {
    return (carts ?? []).length > 0 ? (
      (carts ?? []).map((item) => {
        const subTitle = `${item.totalItems} items | `;
        const rest = `Total price - Rs ${item.totalPrice} /=`;

        return CustomListItem({
          id: item.id,
          title: item.name,
          subTitle,
          subTitle,
          rest,
          color: cartId === item.id ? "orange" : "transparent",
          onCartListItemClicked,
          secondaryAction: (
            <IconButton>
              <DeleteForever />
            </IconButton>
          ),
        });
      })
    ) : loading ? (
      <h2>Loading...</h2>
    ) : (
      <h3>No carts created. </h3>
    );
  };

  const RightContainer = () => {
    return (
      <RightMainContainer>
        <h3>Cart Details</h3>
        <div className="title">
          <ShoppingCart color="success" />
          <div className="name">{cart.name}</div>
        </div>

        <p>Total Items : {cart.totalItems}</p>
        <p>Total Price : Rs : {cart.totalPrice} /=</p>

        <h4>Cart Items : {cart.products.length} items</h4>

        {(cart.products ?? []).length > 0 ? (
          (cart.products ?? []).map((item) => {
            const subTitle = `${item.quantity} items | `;
            const rest = `Unit price : Rs ${item.unitPrice} | Total :  Rs ${
              item.quantity * item.unitPrice
            } /=`;

            return CustomListItem({
              id: item.id,
              title: item.name,
              subTitle,
              subTitle,
              rest,
              color: "transparent",
              image: item.image,
              width: "500px",
              secondaryAction: (
                <IconButton>
                  <DeleteForever />
                </IconButton>
              ),
            });
          })
        ) : loading ? (
          <h2>Loading...</h2>
        ) : (
          <h3>No products added. </h3>
        )}
      </RightMainContainer>
    );
  };

  return (
    <MainCartContainer>
      <div className="left">
        <h3>My Carts (select one to view)</h3>
        <LeftContainer />
      </div>

      <div className="right">
        {cart ? (
          <RightContainer />
        ) : loading ? (
          <h3>Loading..............</h3>
        ) : (
          <h3> - No cart selected -</h3>
        )}
      </div>
    </MainCartContainer>
  );
};

export { Cart };
