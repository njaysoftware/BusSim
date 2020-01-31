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
const PossibleOutcomes = [
  {
    title: 'Demand',
    key: 1,
  },
  {
    title: 'Inventory',
    key: 2,
  },
  {
    title: 'Profit',
    key: 3,
  },
  {
    title: 'Cash',
    key: 4,
  },
  {

    title: 'Return-on-Sales',
    key: 5,
  },
  {
    title: 'Debt / Equity',
    key: 6,
  },
  {
    title: 'Stock Price',
    key: 7,
  }
];
const CurrentOutcomes = (props) => {
  return (
    <Paper elevation={3}>
      <h3>Current Outcomes</h3>
      {PossibleOutcomes.map(el => <Outcome title={el.title} key={el.key} value="2"></Outcome>)}
    </Paper>
  );
};

export default CurrentOutcomes;