import styled from "styled-components";

export const CartItemContainer = styled.div`
  margin-bottom: 2px;
  border: 1px solid;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};

  &:hover {
    cursor: pointer;
  }
`;
