import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { ArticleOutlined } from '@mui/icons-material';


const Root = () => {
  return (
    <div>
      <Typography pl="20px" border="1px solid black" borderLeft="3px solid black" m sx={{marginTop: "20px", backgroundColor: "royalblue", color: "white" }} align="justify" variant='h2' component="h2">
        CASTILLO
      </Typography>
<Button sx={{mr: "auto", ml: "auto", display: "flex"}} variant='outlined' color='secondary' startIcon={<ArticleOutlined/>} endIcon={<ArrowRightAltOutlinedIcon/>}  >dvsfv</Button>
      <Outlet />
    </div>
  )
}

export default Root
