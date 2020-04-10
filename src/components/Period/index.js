import React from 'react';
import {
  Paper,
} from '@material-ui/core';

import Styles from './style';


const Period = (props) => {
  return (
    <div style={Styles.outerContainer}>
      <Paper>
        <div>Period: {props.period}</div>
      </Paper>
    </div>
  );
};

export default Period;