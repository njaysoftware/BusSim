/**
Author: Nathaniel Padgett
Date: 01/29/2020
Copyright: Nathaniel Padgett 2020
Purpose: This is the basic output component for the Outcomes.
 */

import React from 'react';
import {
  Chip,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const OutCome = (props) => {
  return (
    <div>
      <div>
        <label>{props.title}</label>
      </div>
      <div>
        <Chip label={props.value} />
      </div>
    </div>
  );
};

OutCome.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default OutCome;