import React, { useState } from "react";

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




import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { red, teal  } from '@mui/material/colors';


const drawerWidth = 240;

const Root = () => {
  const [myMode, setmyMode] = useState("dark")
  
const darkTheme = createTheme({
  palette: {
    mode: myMode,
    primary: {main: teal[500], light: [300]}
  },
});
  return (

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} />
        <Drawercom setmyMode={setmyMode} drawerWidth={drawerWidth} />
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
    </ThemeProvider>
  );
};

export default Root;
