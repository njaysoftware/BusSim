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
import styles from './styles';

const CurrentDecisions = (props) => {
  return (
    <div style={styles.outerWrapper}>
      <Paper elevation={3} style={styles.outerWrapper}>
        <h3 style={styles.header}>Current Decisions</h3>
        <div style={styles.innerWrapper}>
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

        </div>
      </Paper>
    </div>
  );
};

CurrentDecisions.propTypes = {
  decisionChange: PropTypes.func.isRequired,
  IndustrialAverageChange: PropTypes.func.isRequired,
  IndustrialAverageChecked: PropTypes.bool.isRequired,
};

export default CurrentDecisions;
