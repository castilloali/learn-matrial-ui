import React from 'react'


import { Avatar, Link, Typography, Toolbar, AppBar, useTheme, IconButton } from '@mui/material';
import { Face, Menu } from '@mui/icons-material';


const Appbar = ({drawerWidth, setNoneOrBlock, setTemporaryOrPermanent}) => {
  const theme = useTheme()
  return (
    <AppBar position="static" sx={{ ml : {xs: 0, sm : `${drawerWidth}px`}, width : { sm : `calc(100% - ${drawerWidth}px)`} , background: theme.palette.ali.main }}>
    <Toolbar >
      <IconButton sx={{ display: {sm: "none"}, mr: "30px"}} onClick={() => {
        setTemporaryOrPermanent("temporary")
        setNoneOrBlock("block")
      }}>
        <Menu  fontSize="large" />
      </IconButton>
      <Link  sx={{ flexGrow: 1, textDecoration: "none", "&:hover" : {fontSize: "22px"}, transition: "0.2s" }} color="inherit" href="/"> My Expenses </Link>
      <Typography variant="h6" color="inherit" >Castillo </Typography>
      <Avatar sx={{ml: "10px", width: 35, height: 35}} alt="Cemy Sharp" src="./public/images/Untitled-4.jpg" />
    </Toolbar>
  </AppBar>
  )
}

export default Appbar
