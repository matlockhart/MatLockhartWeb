import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';

import './TopMenu.css';

const TopMenu = () => {  
  // State to handle the menu anchor
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Event handler to open the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler to close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
          <AppBar position="static">
              <Toolbar className="toolbar">
                  <div>
                      <Button color="primary" onClick={handleMenuOpen}>
                          Projects
                      </Button>
                      <Button color="primary" href="https://www.google.com" target="_blank">
                          About Me
                      </Button>
                      <Button color="primary" href="https://www.google.com" target="_blank">
                          Reach Out
                      </Button>
                      <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                          }}
                          transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                          }}
                      >
                          <MenuItem href="https://www.google.com" target="_blank" onClick={handleMenuClose}>
                              Project 1
                          </MenuItem>
                          <MenuItem href="https://www.google.com" target="_blank" onClick={handleMenuClose}>
                              Project 2
                          </MenuItem>
                          <MenuItem href="https://www.google.com" target="_blank" onClick={handleMenuClose}>
                              Project 3
                          </MenuItem>
                      </Menu>
                  </div>
              </Toolbar>
          </AppBar>
      </div>
  );
};

export default TopMenu;
