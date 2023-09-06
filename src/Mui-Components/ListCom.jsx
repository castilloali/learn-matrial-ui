import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const ListCom = () => {
    const theme = useTheme() 
    const currentlocation = useLocation()
    const navigate = useNavigate();
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
            <List>
            <ListItem  sx={{bgcolor: currentlocation.pathname === "/" ? theme.palette.favcolor.main : null }} disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/");
                }}
                >
                <ListItemIcon >
                    <HomeIcon  color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon >
                <ListItemText  primary="Home" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{bgcolor: currentlocation.pathname === "/Create" ? theme.palette.favcolor.main : null }} disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/Create");
                }}
                >
                <ListItemIcon>
                    <CreateIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Create" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{bgcolor: currentlocation.pathname === "/Profile" ? theme.palette.favcolor.main : null }} disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/Profile");
                }}
                >
                <ListItemIcon>
                    <PersonIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{bgcolor: currentlocation.pathname === "/Setting" ? theme.palette.favcolor.main : null }} disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/Setting");
                }}
                >
                <ListItemIcon>
                    <SettingsIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Setting" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{bgcolor: currentlocation.pathname === "/Logout" ? theme.palette.favcolor.main : null }} disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/Logout");
                }}
                >
                <ListItemIcon>
                    <LogoutIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
            </List>
        </nav>
        <Divider />
        </Box>
    );
};

export default ListCom;
