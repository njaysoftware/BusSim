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
const PossibleOutcomes = [
  {
    name: 'Demand',
    title: 'Demand',
    key: 1,
    default: 80000
  },
  {
    name: 'Inventory',
    title: 'Inventory',
    key: 2,
    default: 0,
  },
  {
    name: 'Profit',
    title: 'Profit',
    key: 3,
    default: 228025,
  },
  {
    name: 'Cash',
    title: 'Cash',
    key: 4,
    default: 100000,
  },
  {
    name: 'Revenue', // @TODO: This is just temporary so that it will compile and run
    title: 'Return-on-Sales',
    key: 5,
    default: 7.5
  },
  {
    name: 'Sales',
    title: 'Debt / Equity',
    key: 6,
    default: 112,
  },
  {
    name: 'Sp',
    title: 'Stock Price',
    key: 7,
    default: 15
  }
];

const AVERAGE_SIMULATED_VALUE_POSITION = 0;

const CurrentOutcomes = (props) => {
  console.log(props);
  return (
    <Paper elevation={3}>
      <h3>Current Outcomes</h3>
      {PossibleOutcomes.map(el => {
        console.log(props.results[el.name]);
        return <Outcome title={el.title} key={el.key} value={props.results[el.name][AVERAGE_SIMULATED_VALUE_POSITION][props.period] == 0 ? el.default : props.results[el.name][AVERAGE_SIMULATED_VALUE_POSITION][props.period]}></Outcome>;
      })}
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};
export default connect(mapStateToProps, () => {})(CurrentOutcomes);