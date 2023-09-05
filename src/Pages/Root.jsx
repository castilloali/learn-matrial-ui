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
import { lime, teal  } from '@mui/material/colors';


const drawerWidth = 240;

const Root = () => {
  const [mode, setmyMode] = useState(localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode") === "light" ? "light" : "dark");

  

  
// const darkTheme = createTheme({
//   palette: {
//     mode: mode,
//     ali: {main: teal[500], light: [300]}
//   },
// });

const darkTheme = createTheme({
  palette: {
    mode,
      ...(mode === 'light'
      ? {
          // palette values for light mode

          ali: {main: "#cddc39", light: "#fb8c00"}
        }
        : {
          // palette values for dark mode
          ali: {main: "#009688", light: "#fb8c00"}
          
        }),
  },
});




  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} />
        <Drawercom  setmyMode={setmyMode} drawerWidth={drawerWidth} />
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
