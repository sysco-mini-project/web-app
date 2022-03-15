import styled from "styled-components";

export const CategoryMainContainer = styled.div.attrs((props) => ({}))`
  width: 100vw;
  height: 100%;
  padding: 0;
  /* background-color: green; */
  display: flex;
  flex-direction: column;

  /* justify-content: center; */
  align-items: center;
`;

export const CategoryContainer = styled.div.attrs((props) => ({}))`
  width: 100vw;
  height: 100%;
  padding: 0;
  /* background-color: green; */
  display: flex;
  align-items: baseline;
  justify-content: center;
`;


export const ParallaxContainer = styled.div.attrs((props) => ({}))`
  /* The image used */
  background-image: url("/foods.jpeg");

  /* Set a specific height */
  height: 500px; 
  width: 100%;
  /* margin: 5px; */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row wrap;
  flex-wrap: wrap;
  width: 90%;
  /* background-color: red; */
`;

export const TextBar = styled.div`

font-family: sans-serif;
font-size: 40px;
font-weight: 800;
margin-top: 250px;
/* padding: 10px; */
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
`;