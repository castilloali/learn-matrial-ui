import React from "react";

import {
  Avatar,
  Link,
  Typography,
  Toolbar,
  AppBar,
  Divider,
  Drawer,
  Box,
} from "@mui/material";
import Appbar from "../Mui-Components/Appbar";
import Drawercom from "../Mui-Components/Drawer";

import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Root = () => {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Drawercom drawerWidth={drawerWidth} />

      <Box
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
