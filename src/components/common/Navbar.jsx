// components/NavBar.jsx

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Tutoring Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
