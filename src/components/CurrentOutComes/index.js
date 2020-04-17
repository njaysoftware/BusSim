/**
Author: Nathaniel Padgett
Date: 01/31/2020
Copyright: Nathaniel Padgett 2020
Purpose: component card for storing the list of current outcomes.
 */

import React from 'react';
import Outcome from '../OutCome';
import {
  Paper,
} from '@material-ui/core';
import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';

import numeral from 'numeral';
import styles from './style';

const AVERAGE_SIMULATED_VALUE_POSITION = 1;

const CurrentOutcomes = (props) => {
  console.log(props);
  console.log(props.period);
  return (
    <Paper elevation={3} style={styles.paper}>
      <h3 style={styles.header}>Current Outcomes</h3>
      <Outcome
        title='Demand'
        value={props.period === 1 ? numeral(80000).format('0,0') : numeral(props.results.Demand[1][props.period - 1]).format('0,0')}
      />
      <Outcome
        title='Sales'
        value={props.period === 1 ? numeral(80000).format('0,0') : numeral(props.results.Sales[1][props.period - 1]).format('0,0')}
      />
      <Outcome
        title='Inventory'
        value={props.period === 1 ? numeral(0).format('0,0') : numeral(props.results.Inventory[1][props.period - 1]).format('0,0')}
      />
      <Outcome
        title='Profit'
        value={props.period === 1 ? numeral(228025).format('$0,0.00') : numeral(props.results.Profit[1][props.period - 1]).format('$0,0.00')}
      />
      <Outcome
        title='Cash'
        value={props.period === 1 ? numeral(228025).format('$0,0.00') : numeral(props.results.Cash[1][props.period - 1]).format('$0,0.00')}
      />
      <Outcome
        title='Return-on-Sales'
        value={props.period === 1 ? numeral(.075).format('0.0%') : numeral(props.results.Profit[1][props.period - 1] / props.results.Revenue[1][props.period - 1]).format('0.0%')}
      />
      {/** @TODO need to add hook to balance sheet data */}
      <Outcome
        title='Dept / Equity'
        value={props.period === 1 ? numeral(.07).format('0.0%') : numeral(props.results.Profit[1][props.period - 1] / props.results.Revenue[1][props.period - 1]).format('0.0%')}
      />
      <Outcome
        title='Stock Price'
        value={props.period === 1 ? numeral(7).format('$0.00') : numeral(props.results.Sp[1][props.period - 1]).format('$0.00')}
      />
    </Paper>
  );
};

CurrentOutcomes.propTypes = {
  results: PropTypes.object.isRequired,
  period: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};
export default connect(mapStateToProps, () => {})(CurrentOutcomes);