import { Box, InputAdornment, TextField } from "@mui/material"

const Create = () => {

    return (
  <>
  <Box sx={{mt:"60px"}}>
  <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
  </Box>
  </>
    )
  }
  
  export default Create