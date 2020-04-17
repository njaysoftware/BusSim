import React from 'react';
import {
  Card,
} from '@material-ui/core';

import Styles from './style';
import PropTypes from 'prop-types';



const Period = (props) => {
  return (
    <div style={Styles.outerContainer}>
      <Card variant='outlined'>
        <div><span>Quarter:</span> {props.period}</div>
      </Card>
    </div>
  );
};

Period.propTypes = {
  period: PropTypes.number.isRequired,
};
export default Period;