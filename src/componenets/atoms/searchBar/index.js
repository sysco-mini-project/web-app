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

const SearchBar = () => {
  const [focused, setFoucused] = React.useState(false);
  // const [radius, setRadius] = React.useState("50%");
  return (
    <Search>
      <Paper
        component="form"
        sx={{
          p: "2px 2px",
          display: "flex",
          alignItems: "center",
          borderRadius: focused ? "1%" : "50%",
          width: focused ? 400 : 40,
          backgroundColor: focused ? "white" : "transparent",
          className: "searchBox",
        }}
      >
        <InputBase
          sx={{ flex: 1, backgroundColor: "transparent", }}
          placeholder="Search product"
          inputProps={{ "aria-label": "Search product" }}
        />
        <IconButton
          sx={{
            p: "10px",
            backgroundColor: "transparent",
          }}
          aria-label="search"
          onClick={() => {
            setFoucused(true);
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Search>
  );
};

export { SearchBar };
