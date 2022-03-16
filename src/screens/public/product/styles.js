import styled from "styled-components";

export const ProductMainWrapper = styled.div.attrs((props) => ({}))`
  width: 100vw;
  height: 100%;
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
