import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'


const Root = () => {
  return (
    <div>
      <Typography border="1px solid black" borderLeft="3px solid black" m sx={{marginTop: "20px", backgroundColor: "royalblue", color: "white" }} align="justify" variant='h2' component="h2">
        CASTILLO
      </Typography>
      <Outlet />
    </div>
  )
}

export default Root
