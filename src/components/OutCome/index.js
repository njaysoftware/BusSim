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
const OutCome = (props) => {
  return (
    <div>
      <div>
        <title>{props.title}</title>
      </div>
      <div>
        <Chip>{props.value}</Chip>
      </div>
    </div>
  );
};

export default OutCome;