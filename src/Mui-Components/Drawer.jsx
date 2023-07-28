import React from 'react'

import { Toolbar, Divider, Drawer } from '@mui/material';

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
            
            {/* <Divider /> */}
        </Drawer>
    )
}

export default Drawercom
