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
  /* background-color: green */
`;

export const BaseCard = styled.div`
  width: 400px;
  height: 700px;
  /* margin: 40px 8px 30px 8px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  /* background-color: green; */
`;

export const Quantity = styled.div`
  font-family: sans-serif;
  font-size: 15px;
  color: black;
  margin-top: 0px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  height: 100px;

  .left {
    flex: 1;
    /* background-color: pink; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      padding-top: 5px;
      padding-bottom: 5px;
      font-family: sans-serif;
      color: white;
      font-weight: 600;
    }

    .quantities {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      color: black;
      font-weight: 600;
      justify-content: space-evenly;
      align-items: center;

      /* background-color: red; */
    }
  }

  .right {
    flex: 1;
    /* background-color: yellow; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid;

    .name {
      padding-top: 5px;
      padding-bottom: 5px;
      font-family: sans-serif;
      color: white;
      font-weight: 600;
    }

    .price {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      color: black;
      font-weight: 600;
      justify-content: space-evenly;
      align-items: center;

      /* background-color: red; */
    }
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  background-color: gray;

  .left {
    flex: 1;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid;
  }

  .right {
    flex: 1;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StepThreeContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .main-container {
    width: 60%;
    height: 95%;
  }

  .cart-contaier {
    margin-top: 5px;
    height: 100px;
    width: 100%;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: 600;
  }
`;
export const BottomDetails = styled.div`
  height: 100px;
  width: 100%;
  background-color: yellow;
`;

export const StepTwoContainer = styled.div`
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .add-cart-btn-container {
    width: 100%;
    height: 50px;
    /* margin-top: 20px; */
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
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  /* background-color: blue; */
  padding: 10px;

  .back-btn-container {
    display: flex;
    flex: 1;
    /* background-color: red;  */
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
    background-color: #f2f7f4;
    height: 100%;
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
