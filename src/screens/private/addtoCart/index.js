import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppBarContext } from "../../../context/appBarConfigProvider";
import { ServiceLocator } from "../../../context/serviceProvider";
import { useFetch } from "../../../hooks/useFetch";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  BaseCard,
  Quantity,
  StepOneContainer,
  StepperWrapper,
  StepTwoContainer,
} from "./styles";
import ItemCard from "../../../componenets/atoms/cards/card";
import { Avatar } from "@mui/material";
import { IcnButton } from "../../../componenets/atoms/button/iconButton";
import { AddShoppingCart, PlusOne, Remove } from "@mui/icons-material";
import CreateCartDialog from "../../../componenets/dialogs/createCart";

const AddToCart = () => {
  let params = useParams();

  const [quantity, setQuantity] = React.useState(1);

  const { setAppBarConfigs } = useContext(AppBarContext);
  const { productService, cartService } = useContext(ServiceLocator);

  const getProduct = async () => {
    return await productService.getProductById(params.id);
  };

  const getUserCarts = async () => {
    return await cartService.getAllUserCarts();
  };

  const [data, error, loading] = useFetch(
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

  const HorizontalLinearStepper = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <Box sx={{ width: "50%", height: "100%" }}>
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

        <>{children[activeStep]}</>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
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
              height="250"
              description={product.name}
            />

            <Quantity>
              Quantity : {quantity}
              <div className="total-container">
                Total : {quantity * data?.product.price}
              </div>
              <div className="button-container">
                <IcnButton
                  icon={PlusOne}
                  backgroundColor="orange"
                  color="white"
                  size="small"
                  cb={() => setQuantity((i) => i + 1)}
                />

                <IcnButton
                  icon={Remove}
                  backgroundColor="orange"
                  color="white"
                  size="small"
                  cb={() => setQuantity((i) => (i <= 1 ? i : i - 1))}
                />
              </div>
            </Quantity>
          </BaseCard>
        ) : (
          <h2>Loading...</h2>
        )}
      </StepOneContainer>
    );
  };

  const StepTwo = () => {
    return (
      <StepTwoContainer>
        <div className="add-cart-btn-container">
          <CreateCartDialog></CreateCartDialog>

          <div className="create-text">Create new Cart</div>
        </div>

        <div className="your-carts">Your Carts</div>
      </StepTwoContainer>
    );
  };

  return (
    <div>
      <h1>Add to cart page {params.id}</h1>

      <StepperWrapper>
        <HorizontalLinearStepper>
          <StepOne />
          <StepTwo />

          <h1>step 3</h1>
        </HorizontalLinearStepper>
      </StepperWrapper>
    </div>
  );
};

export { AddToCart };
