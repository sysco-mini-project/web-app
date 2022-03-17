import styled from "styled-components";

export const AppBarContainer = styled.div.attrs((props) => ({}))`
  .appBar {
    background-color: #f37021;
  }

  .title {
    /* padding-left:'6px'; */
  }

  .tb{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .comp{
    flex: 1;
  }

  .buttonBox {
    margin: 0px 5px 0px 12px;
  }
`;
