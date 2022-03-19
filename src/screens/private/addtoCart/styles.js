import styled from "styled-components";

export const StepperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* background-color: red; */
`;

export const StepOneContainer = styled.div`
  width: 100% !important;
  height: 100% !important;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BaseCard = styled.div`
  width: 345px;
  height: 500px;
  /* margin: 40px 8px 30px 8px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const Quantity = styled.div`
  font-family: sans-serif;
  font-size: 15px;
  color: black;
  margin-top: 20px;

  .button-container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .total-container {
    font-family: sans-serif;
    font-size: 15px;
    color: black;
    margin-top: 20px;
  }
`;

export const StepTwoContainer = styled.div`
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .add-cart-btn-container {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin: 0px 160px 0px 0px; */

    .create-text {
      margin-left: 10px;
    }
  }

  .your-carts {
    font-family: sans-serif;
    font-size: 20px;
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .cartName {
    font-family: sans-serif;
    margin-left: 10px;
  }
`;

export const PostSavedMessageContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .msgText {
    margin: 20px 0px;
    font-family: sans-serif;
    margin-left: 10px;
  }
`;

export const StepContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  /* background-color: blue; */
  padding: 10px;

  .back-btn-container {
    display: flex;
    flex: 1;
    /* background-color: red; */
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 100%; 
  }

  .step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    /* background-color: green; */
  }

  .next-btn-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* background-color: yellow; */
    height: 100%;
  }
`;
