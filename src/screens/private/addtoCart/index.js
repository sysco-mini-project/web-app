import { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  BaseCard,
  BottomCard,
  PostSavedMessageContainer,
  Quantity,
  StepContainer,
  StepOneContainer,
  StepperWrapper,
  StepThreeContainer,
  StepTwoContainer,
} from "./styles";
import ItemCard from "../../../componenets/atoms/cards/card";
import { Avatar, List } from "@mui/material";
import { IcnButton } from "../../../componenets/atoms/button/iconButton";
import {
  Add,
  Check,
  NavigateBefore,
  NavigateNext,
  Remove,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import CreateCartDialog from "../../../componenets/dialogs/createCart";
import { CustomListItem } from "../../../componenets/listItem";
import { OutLinedButton } from "../../../componenets/atoms/button/outLinedButton";
import { orange } from "@mui/material/colors";

const AddToCart = () => {
  let params = useParams();

  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState(-1);
  const [activeStep, setActiveStep] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const navigate = useNavigate();

  const { setAppBarConfigs } = useContext(AppBarContext);
  const { productService, cartService } = useContext(ServiceLocator);

  const getProduct = async () => {
    return await productService.getProductById(params.id);
  };

  const getUserCarts = async () => {
    return await cartService.getAllUserCarts();
  };

  const [data, error, loading, setData] = useFetch(
    useCallback(async () => {
      const product = await getProduct();
      const carts = await getUserCarts();

      const result = { data: { product: product.data, carts: carts.data } };
      return result;
    }, [])
  );

  const { product, carts } = data ?? {};

  useEffect(() => {
    setAppBarConfigs((prev) => {
      return { ...prev, name: "Add to Cart", searchBar: false };
    });
  }, []);

  const steps = ["Add Quantity", "Select Cart", "Add to Cart"];
  const detailedSteps = [
    "Add Quantity",
    "Select the cart to add the product",
    "Finish Review",
  ];

  const validators = [
    {
      message: "quantity should be greater than 1",
      validater: () => quantity >= 1,
    },

    {
      message: "cart is required",
      validater: () => cart != -1,
    },
  ];

  const addToCard = async () => {
    const data = {
      cartId: cart,
      productId: product.id,
      quantity: quantity,
    };

    await cartService
      .addToCart(data)
      .then((res) => {
        console.log("successfully added to cart");
      })
      .catch((err) => {
        console.log("error occured in addng account");
      });

    setSaved(true);
  };

  const PostSavedMessage = () => {
    return (
      <PostSavedMessageContainer>
        <div className="msgText">
          Successfully added {quantity} items of {product.name} to the cart
        </div>

        <OutLinedButton
          name="Continue Shopping"
          backgroundColor="orange"
          clickCb={() => {
            navigate(-1);
          }}
        />
      </PostSavedMessageContainer>
    );
  };

  const HorizontalLinearStepper = ({ children }) => {
    const handleNext = () => {
      if (activeStep === steps.length - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        addToCard();
      } else {
        if (validators[activeStep].validater()) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          alert(validators[activeStep].message);
        }
      }
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep < steps.length ? (
          <StepContainer>
            <div className="back-btn-container">
              <IcnButton
                icon={NavigateBefore}
                cb={handleBack}
                backgroundColor="grey"
                disabled={activeStep === 0}
              />
            </div>
            <div className="step-container">
              <h3>{detailedSteps[activeStep]}</h3>
              {children[activeStep]}
            </div>
            <div className="next-btn-container">
              <IcnButton
                icon={activeStep === steps.length - 1 ? Check : NavigateNext}
                cb={handleNext}
                backgroundColor="grey"
              />
            </div>
          </StepContainer>
        ) : !saved ? (
          <h3>Saving...................</h3>
        ) : (
          <PostSavedMessage />
        )}
      </Box>
    );
  };

  const StepOne = () => {
    const avatar = <Avatar alt="Remy Sharp" src={product?.producerImage} />;
    const title = product?.producer;
    const subheader = `Rs : ${product?.price} /=`;

    return (
      <StepOneContainer>
        {data?.product ? (
          <BaseCard>
            <ItemCard
              header={{ avatar, title, subheader }}
              image={product.image}
              className="box"
              height="350"
              description={product.name}
              Bottom={() => (
                <Quantity>
                  <div className="left">
                    <div className="name">Add Quantity</div>

                    <div className="quantities">
                      <IcnButton
                        icon={Remove}
                        backgroundColor="grey"
                        color="white"
                        size="small"
                        cb={() => setQuantity((i) => (i <= 1 ? i : i - 1))}
                      />

                      <div> {quantity}</div>
                      <IcnButton
                        icon={Add}
                        backgroundColor="grey"
                        color="white"
                        size="small"
                        cb={() => setQuantity((i) => i + 1)}
                      />
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">Total Amount</div>
                    <div className="price">
                      Rs {quantity * data?.product.price}
                    </div>
                  </div>
                </Quantity>
              )}
            />
          </BaseCard>
        ) : (
          <h2>Loading...</h2>
        )}
      </StepOneContainer>
    );
  };

  const onCartListItemClicked = useCallback((id) => {
    setCart(id);
  }, []);

  const onCartCreated = useCallback((created) => {
    if (created) {
      getUserCarts()
        .then((res) => {
          setData((old) => {
            return {
              ...old,
              carts: res.data,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const StepTwo = () => {
    return (
      <StepTwoContainer>
        <div className="add-cart-btn-container">
          <CreateCartDialog createCb={onCartCreated} />

          <div className="create-text">Create new Cart</div>
        </div>

        <div className="your-carts">My Carts</div>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {(data?.carts ?? []).length > 0 ? (
            (data?.carts ?? []).map((item) => {
              const subTitle = `${item.totalItems} items - `;
              const rest = `Rs ${item.totalPrice} /=`;

              return CustomListItem({
                id: item.id,
                title: item.name,
                subTitle,
                subTitle,
                rest,
                color: cart === item.id ? "orange" : "transparent",
                onCartListItemClicked,
              });
            })
          ) : (
            <h3>No carts found.</h3>
          )}
        </List>
      </StepTwoContainer>
    );
  };

  const StepThree = () => {
    const avatar = <Avatar alt="Remy Sharp" src={product?.producerImage} />;
    const title = product?.producer;
    const subheader = `Rs : ${product?.price} /=`;
    return (
      <StepThreeContainer>
        {data?.product ? (
          <div className="main-container">
            <ItemCard
              header={{ avatar, title, subheader }}
              image={product.image}
              className="box"
              height="280"
              description={product.name}
              Bottom={() => (
                <BottomCard>
                  <div className="left">
                    <div className="name">Quantity</div>
                    <div className="amount">{quantity}</div>
                  </div>

                  <div className="right">
                    <div className="name">Total Price</div>
                    <div className="amount">
                      Rs {quantity * data?.product.price}
                    </div>
                  </div>
                </BottomCard>
              )}
            />

            <div className="cart-contaier">
              <ShoppingCartCheckout sx={{ color: orange }} />
              <div>
                {" "}
                add to cart : {data.carts.filter((i) => i.id === cart)[0].name}
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </StepThreeContainer>
    );
  };

  return (
    <StepperWrapper>
      <HorizontalLinearStepper>
        <StepOne />
        <StepTwo />
        <StepThree />
      </HorizontalLinearStepper>
    </StepperWrapper>
  );
};

export { AddToCart };
