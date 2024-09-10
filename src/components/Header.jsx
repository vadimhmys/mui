import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography component="span" variant="h6" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit" >
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
