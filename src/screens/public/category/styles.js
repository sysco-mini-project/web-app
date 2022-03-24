import styled from "styled-components";

export const CategoryMainContainer = styled.div.attrs((props) => ({}))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryContainer = styled.div.attrs((props) => ({}))`
  width: 100%;
  height: 100%;
  /* padding: 0; */
  display: flex;
  /* align-items: baseline; */
  justify-content: center;
 
`;

export const ParallaxContainer = styled.div.attrs((props) => ({}))`
  background-image: url("/foods.jpeg");
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row wrap;
  flex-wrap: wrap;
  width: 100%;
`;

export const TextBar = styled.div`
  font-family: sans-serif;
  font-size: 40px;
  font-weight: 800;
  margin-top: 200px;

  position: absolute;
  z-index: 15;
  color: white;
`;

export const CategoryText = styled.div`
  font-family: sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: black;
  padding: 15px;
  z-index: 10;
`;
