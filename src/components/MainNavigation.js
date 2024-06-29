import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


export default function MainNavigation() {
    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 ,justifyContent: 'flex-start' }}>
      <AppBar position="static">
        <Toolbar>
          
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/favourites")}>Favourites</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
