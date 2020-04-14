/**
Author: Nathaniel Padgett
Date: 01/27/2020
Copyright: Nathaniel Padgett 2020
Purpose:
The main current decisions component for rendering all the options to be changed
 */
import React from 'react';
import CurrentDecisionsInput from '../CurrentDecisionsInput/index';
import {
  Paper,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import CurrentInputs from '../CurrentDecisionsInput/decisionInputs';
import PropTypes from 'prop-types';

const CurrentDecisions = (props) => {
  return (
    <Paper elevation={3}>
      <h3>Current Decisions</h3>
      {CurrentInputs.map((element) => {
        return <CurrentDecisionsInput 
          title={element.title} 
          startValue={element.startValue} 
          changeValue={element.changeValue} 
          key={element.key}
          valueChangeEvent={(value) => {
            props.decisionChange(value, element.name);
          }}
        />;
      })}
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.IndustrialAverageChecked}
              onChange={props.IndustrialAverageChange}
            />
          }
          label="Purchase Information"
        />
      </div>
    </Paper>
  );
};

CurrentDecisions.propTypes = {
  decisionChange: PropTypes.func.isRequired,
  IndustrialAverageChange: PropTypes.func.isRequired,
  IndustrialAverageChecked: PropTypes.bool.isRequired,
};

export default CurrentDecisions;
