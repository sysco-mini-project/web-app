import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Search } from "./style";
import { width } from "@mui/system";
import { Cancel } from "@mui/icons-material";

const SearchBar = () => {
  const [focused, setFoucused] = React.useState(false);
  // const [radius, setRadius] = React.useState("50%");
  return (
    <Search>
      <Paper
        className="searchBox"
        component="form"
        sx={{
          p: "2px 2px",
          display: "flex",
          alignItems: "center",
          borderRadius: focused ? "1%" : "50%",
          width: focused ? 400 : 40,
          backgroundColor: focused ? "white" : "transparent",
        }}
      >
        <InputBase
          sx={{
            m1: 1,
            flex: 1,
            backgroundColor: "transparent",
            paddingLeft: focused ? "40px" : "0px",
          }}
          placeholder="Search product"
          inputProps={{ "aria-label": "Search product" }}
        />
        <IconButton
          sx={{
            p: "10px",
            backgroundColor: "transparent",
            color: focused ? "#f37021" : "white",
          }}
          aria-label="search"
          onClick={() => {
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
