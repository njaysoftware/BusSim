/**
Author: Nathaniel Padgett
Date: 01/20/2020
Copyright: Nathaniel Padgett 2019
Purpose:
Simple App bar that takes a title that can be resuzed has a drop down menu component to the left
 */
import styles from './styles';
import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';


const AppBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header style={styles.header}>
      <div style={styles.flexContainer}>
        <div style={styles.leftContainer}>
          <h1>
            {props.title}
          </h1>
        </div>
        <div style={styles.rightContainer}>
          <IconButton
            onClick={handleClick}
          >
            <MenuIcon style={styles.iconStyles}/>
          </IconButton>
          <Menu
            onClose={handleClose}
            open={open}
            anchorEl={anchorEl}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default AppBar;