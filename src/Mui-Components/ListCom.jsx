import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
// import { Icon } from '@mui/material';

import { useNavigate } from "react-router-dom";

const ListCom = () => {
  const navigate = useNavigate();
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
            <List>
            <ListItem disablePadding>
                <ListItemButton
                onClick={() => {
                    navigate("/");
                }}
                >
                <ListItemIcon>
                    <HomeIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
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
            <ListItem disablePadding>
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
            <ListItem disablePadding>
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
            <ListItem disablePadding>
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
