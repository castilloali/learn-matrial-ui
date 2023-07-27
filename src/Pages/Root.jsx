import React from 'react'
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Avatar, Link } from '@mui/material';

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>




          <Link  sx={{ flexGrow: 1, textDecoration: "none" }} color="inherit" href="/"> My Expenses</Link>

<Typography variant="h6" color="white" >Castillo</Typography>

<Avatar sx={{ml: "10px", width: 35, height: 35}} alt="Cemy Sharp" src="static/images/avatar/1.jpg" />



          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Root
