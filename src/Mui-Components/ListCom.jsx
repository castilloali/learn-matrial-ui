import React from 'react'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const ListCom = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <HomeIcon color="primary" sx={{fontSize: "25px"}}/>
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <CreateIcon color="primary" sx={{fontSize: "25px"}}/>
            </ListItemIcon>
            <ListItemText primary="Create" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <PersonIcon color="primary" sx={{fontSize: "25px"}}/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <SettingsIcon color="primary" sx={{fontSize: "25px"}}/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <LogoutIcon color="primary" sx={{fontSize: "25px"}}/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
            </ListItemButton>
        </ListItem>
        </List>
    </nav>
    <Divider />
</Box>
  )
}

export default ListCom
