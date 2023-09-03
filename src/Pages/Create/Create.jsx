import { Box, Button, InputAdornment, TextField, styled } from "@mui/material"
import { purple } from "@mui/material/colors";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
const Create = () => {
    return (
  <>
  <Box component="form" sx={{mt:"60px", width: "360px"}}>
    
  <TextField
        fullWidth={true}
        label="With normal TextField"
        sx={{ m: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        variant="filled"
        />
        <br />


  <TextField
          fullWidth
          label="With normal TextField"
          sx={{ m: 1}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
              <ColorButton sx={{m:"10px"}} variant="contained">Custom  <ArrowForwardIosIcon  sx={{fontSize:15}} /> </ColorButton>
  </Box>
  </>
    )
  }
  
  export default Create