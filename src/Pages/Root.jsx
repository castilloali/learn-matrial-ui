import React from 'react'
// import AppBar from '@mui/material/AAvatar Component & hoverAvatar Component & hoverppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Avatar, Link, Typography, Toolbar, AppBar } from '@mui/material';

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>




          <Link  sx={{ flexGrow: 1, textDecoration: "none", "&:hover" : {fontSize: "22px"}, transition: "0.2s" }} color="inherit" href="/"> My Expenses</Link>

<Typography variant="h6" color="inherit" >Castillo</Typography>

<Avatar sx={{ml: "10px", width: 35, height: 35}} alt="Cemy Sharp" src="./public/images/Untitled-4.jpg" />



          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Root
