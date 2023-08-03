import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{mt: "60px"}}>
      <Paper
      elevation={3} 
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "20px",
          pb: "10px",
          pl: "15px",
          position: "relative",
        }}
      >
        <Typography variant="h6" color="initial">
          GYM
        </Typography>
        <Typography
          sx={{ mr: "33px", opacity: ".7" }}
          variant="h6"
          color="initial"
        >
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0"}}>
          <Close fontSize="small"/>
        </IconButton>
      </Paper>

    </Box>
  );
};

export default Home;
