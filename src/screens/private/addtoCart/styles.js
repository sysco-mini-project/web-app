import styled from "styled-components";

export const StepperWrapper = styled.div`
  width: 100vw;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
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
  margin: 40px 8px 30px 8px;
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
  align-items: flex-start;

  .add-cart-btn-container {
    width: 100%;
    height: 50px;
    margin-top: 50px;
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

  .cartName{
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

  .msgText{
    margin: 20px 0px;
    font-family: sans-serif;
    margin-left: 10px;
  }
`;