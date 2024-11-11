import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music App
          </Typography>
          <Button color="inherit" component={Link} to="/download">
            Muziek Downloaden
          </Button>
          <Button color="inherit" component={Link} to="/create-playlist">
            Playlist Aanmaken
          </Button>
          <Button color="inherit" component={Link} to="/add-music">
            Muziek Toevoegen
          </Button>
          <Button color="inherit" component={Link} to="/download-playlist">
            Playlist Downloaden
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;