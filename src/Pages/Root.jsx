import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'


const Root = () => {
  return (
    <div>
      <Typography align="justify" variant='h2' component="h2">
        CASTILLO
      </Typography>
      <Outlet />
    </div>
  )
}

export default Root
