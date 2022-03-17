import styled from "styled-components";

export const ProductMainWrapper = styled.div.attrs((props) => ({}))`
  width: 100vw;
  height: 100%;
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.div.attrs((props) => ({}))`
  width: 100vw;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row wrap;
  flex-wrap: wrap;
  width: 90%;
`;

export const StickDiv = styled.div`
  height: 30px;
  width: 80%;
  background-color: red;
  position: sticky;
  top: 60px;
  z-index: 10;
`;
