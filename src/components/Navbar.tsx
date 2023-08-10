import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            StarWars Shop
          </Typography>
          <Button color="inherit" onClick={() => {navigate("/")}}>Início</Button>
          <Button color="inherit" onClick={() => {navigate("/about")}}>Sobre</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar