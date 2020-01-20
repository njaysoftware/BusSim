/**
Author: Nathaniel Padgett
Date: 01/20/2020
Copyright: Nathaniel Padgett 2019
Purpose:
Simple App bar that takes a title that can be resuzed has a drop down menu component to the left
 */
import styles from './styles';
import React from 'react';


const AppBar = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.leftContainer}>
        <p>
          {props.title}
        </p>
      </div>
    </header>
  );
};

export default AppBar;