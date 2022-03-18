import styled from "styled-components";

export const MainCartContainer = styled.div`
  width: 100%;
  height: 98%;
  margin-top: 100px;
  /* background: green; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  .left {
    float: left;
    width: 25%;
    /* background: red; */
    height: 100%;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  .right {
    float: right;
    width: 35%;
    /* background: blue; */
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  .right::-webkit-scrollbar {
    display: none;
  }

  .left::-webkit-scrollbar {
    display: none;
  }
`;

export const RightMainContainer = styled.div`
  height: 100%;
  width: 90%;
  margin-top: 0px;

  .title {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;

    .name {
      font-size: xx-large;
      font-family: sans-serif;
      margin-left: 10px;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 800;
    }
  }
`;
