import styled from "styled-components";

export const AppBarContainer = styled.div.attrs((props) => ({}))`
  background-color: #f37021;

  .tb {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 50px;
  }

  .comp {
    flex: 1;
  }

  .visible-to-logged-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 5px 0px 12px;
  }

  .search-box {
    padding-right: 65px;
  }
`;

export const ShoppingCartContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin: 0px 20px;
`;
