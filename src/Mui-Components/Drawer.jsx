import React from 'react'

import { Toolbar, Divider, Drawer } from '@mui/material';
import ListCom from './ListCom';



const Drawercom = ({drawerWidth}) => {
    return (
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <ListCom/>
        </Drawer>
    )
}

export default Drawercom
