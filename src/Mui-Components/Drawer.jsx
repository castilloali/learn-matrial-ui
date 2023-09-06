import React from "react";

import { Toolbar, Divider, Drawer, Button, IconButton } from "@mui/material";
import ListCom from "./ListCom";
import { useTheme } from "@emotion/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Drawercom = ({drawerWidth ,setmyMode ,noneOrBlock ,setNoneOrBlock ,setTemporaryOrPermanent, TemporaryOrPermanent }) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display:{xs : noneOrBlock, sm : "block"},
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth ,
          boxSizing: "border-box",
        },
      }}
      variant= {TemporaryOrPermanent}
      // temporary
      anchor="left"
      open={true}
      onClose={() => {
        setNoneOrBlock("none");
        setTemporaryOrPermanent("permanent")
      }}
    >
      {/* <Button onClick={() => {
                setmyMode(theme.palette.mode === "light" ?"dark" : "light");
            }} variant="contained" color="primary">
                mode
            </Button> */}
      <IconButton
        // onClick={colorMode.toggleColorMode}
        onClick={() => {
          localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark");
          setmyMode(theme.palette.mode === "light" ?"dark" : "light");
        }} 
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      {/* <Toolbar /> */}
      <Divider />
      <ListCom />
    </Drawer>
  );
};

export default Drawercom;
