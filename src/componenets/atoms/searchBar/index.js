import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./style";
import { Cancel } from "@mui/icons-material";
import { SearchValueContext } from "../../../context/SearchValueProvider";

const SearchBar = () => {
  const [focused, setFoucused] = React.useState(false);
  const { setSearchValue } = React.useContext(SearchValueContext);

  return (
    <Search>
      <Paper
        className="searchBox"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: focused ? "1%" : "50%",
          width: focused ? 400 : 0,
          backgroundColor: focused ? "white" : "transparent",
        }}
      >
        <InputBase
          sx={{
            m1: 1,
            flex: 1,
            backgroundColor: "transparent",
            paddingLeft: focused ? "40px" : "0px",
            disableUnderline: true,
          }}
          placeholder="Search product"
          inputProps={{ "aria-label": "Search product" }}
          onChange={(event) => {
            if (event?.target?.value != null) {
              let setStateTimeout = setTimeout(()=> {
                setSearchValue({text : event?.target?.value, btnState : true});
                clearTimeout(setStateTimeout)
              }, 500)
            }
          }}
        />
        <IconButton
          sx={{
            p: "10px",
            backgroundColor: "transparent",
            color: focused ? "#f37021" : "white",
          }}
          aria-label="search"
          onClick={() => {
            setSearchValue({text : '', btnState : !focused});
            setFoucused((pre) => !pre);
          }}
        >
          {focused ? <Cancel /> : <SearchIcon />}
        </IconButton>
      </Paper>
    </Search>
  );
};

export { SearchBar };
