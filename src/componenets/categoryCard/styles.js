import styled from "styled-components";

export const BaseCard = styled.div`
width: 345px;
height: 325px;
position: relative;

margin: 5px;

.box {
  width: 340px;
  height: 320px;
  position: absolute;
  top: 0;
  left: 0;
 /* for demo purpose  */
  /* background-color: green; */
}
.stack-top {
  z-index: 9;
  display: inline-block;
  /* margin: 20px; for demo purpose  */
  background-color: black;
  opacity: 0.5; 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
`;
