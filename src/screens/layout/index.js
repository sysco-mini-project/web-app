import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";

import { CustomDrawer } from "../../componenets/drawer";
import CustomAppBar from "../../componenets/appBar";

const Layout = ({ children, ...rest }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <CustomAppBar />

      <CustomDrawer />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
