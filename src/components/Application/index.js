/**
Author: Nathaniel Padgett
Date: 01/24/2020
Copyright: Nathaniel Padgett 2020
Purpose:
To provide a css grid layout for the different component. Also, provides a place for dialogs to open and close from.
 */
import React from 'react';
import Styles from './styles';
import {
  Button,
  Paper,
} from '@material-ui/core';
import CurrentOutcomes from '../CurrentOutComes';
import CurrentDecisions from '../CurrentDecisions';
import IndustryAverage from '../IndustryAverage';


const SIMULATE_CLICK = 'SIMULATE_CLICK';
const FINANCIAL_CLICK = 'FINANCIAL_CLICK';
const RESET_CLICK = 'RESET_CLICK';
const PERFORMANCE_CLICK = 'PERFORMANCE_CLICK';
const FINAL_RESULTS_CLICK = 'FINAL_RESULTS_CLICK';
const INFORMATION_CLICK = 'INFORMATION_CLICK';
const Application = () => {
  function handleClick(type) {
    switch (type) {
    case SIMULATE_CLICK:
      console.log(SIMULATE_CLICK);
      break;
    case FINANCIAL_CLICK:
      console.log(FINANCIAL_CLICK);
      break;
    case RESET_CLICK:
      console.log(RESET_CLICK);
      break;
    case PERFORMANCE_CLICK:
      console.log(PERFORMANCE_CLICK);
      break;
    case FINAL_RESULTS_CLICK:
      console.log(FINAL_RESULTS_CLICK);
      break;
    case INFORMATION_CLICK:
      console.log(INFORMATION_CLICK);
      break;
    default:
      console.log('THis');
      break;
    }
  }
  return (
    <div style={Styles.gridContainer}>
      <div style={Styles.currentDecisionsContainer}>
        <CurrentDecisions></CurrentDecisions>
      </div>
      <div style={Styles.buttonsContainer}>
        <Paper elevation={3}>
          <div style={Styles.buttonRow}>
            <Button
              onClick={() => handleClick(SIMULATE_CLICK)}
            >Simulate</Button>
            <Button
              onClick={() => handleClick(FINANCIAL_CLICK)}
            >Financials</Button>
          </div>
          <div style={Styles.buttonRow}>
            <Button
              onClick={() => handleClick(RESET_CLICK)}
            >Reset</Button>
            <Button
              onClick={() => handleClick(PERFORMANCE_CLICK)}
            >Performance</Button>
          </div>
          <div style={Styles.buttonRow}>
            <Button
              onClick={() => handleClick(FINAL_RESULTS_CLICK)}
            >Final Results</Button>
            <Button
              onClick={() => handleClick(INFORMATION_CLICK)}
            >Information</Button>
          </div>
        </Paper>
      </div>
      <div style={Styles.currentOutputsContainer}>
        <CurrentOutcomes></CurrentOutcomes>
      </div>
      <div style={Styles.industryAverageContainer}>
        <IndustryAverage />
      </div>
    </div>
  );
};

export default Application;