import React, { useState } from "react";

import {
  Box,
} from "@mui/material";
import Appbar from "../Mui-Components/Appbar";
import Drawercom from "../Mui-Components/Drawer";

import { Outlet } from "react-router-dom";




import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";


const drawerWidth = 240;

const Root = () => {
  const [mode, setmyMode] = useState(localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode") === "light" ? "light" : "dark");

const darkTheme = createTheme({
  palette: {
    mode,
      ...(mode === 'light'
      ? {
          // palette values for light mode

          ali: {main: "#cddc39", light: "#fb8c00"},
          favcolor: {main: "#9e9e9e"}
        }
        : {
          // palette values for dark mode
          ali: {main: "#009688", light: "#fb8c00"},
          favcolor: {main: "#455a64"}
          
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
            ml: { sm : `${drawerWidth}px`},
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
