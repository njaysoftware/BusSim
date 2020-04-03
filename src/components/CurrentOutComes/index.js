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


const PossibleOutcomes = [
  {
    name: 'Demand',
    title: 'Demand',
    key: 1,
    default: 80000,
    format: '0,0', //These formats are based on the numeral library
  },
  {
    name: 'Sales',
    title: 'Sales',
    key: 2,
    default: 80000,
    format: '0,0', //These formats are based on the numeral library
  },
  {
    name: 'Inventory',
    title: 'Inventory',
    key: 3,
    default: 0,
    format: '0,0',
  },
  {
    name: 'Profit',
    title: 'Profit',
    key: 4,
    default: 228025,
    format: '$0,0.00',
  },
  {
    name: 'Cash',
    title: 'Cash',
    key: 5,
    default: 100000,
    format: '$0,0.00',
  },
  {
    name: 'Revenue', // @TODO: This is just temporary so that it will compile and run
    title: 'Return-on-Sales',
    key: 6,
    default: 7.5,
    format: '0,0',
  },
  {
    name: 'Sales',
    title: 'Debt / Equity',
    key: 7,
    default: 112,
    format: '$0,0.00', //I think this is the correct format.
  },
  {
    name: 'Sp',
    title: 'Stock Price',
    key: 8,
    default: 15,
    format: '$0,0.00',
  }
];

const AVERAGE_SIMULATED_VALUE_POSITION = 1;

const CurrentOutcomes = (props) => {
  console.log(props);
  return (
    <Paper elevation={3}>
      <h3>Current Outcomes</h3>
      {PossibleOutcomes.map(el => {
        console.log(`Name ${el.name} value is ${props.results[el.name][AVERAGE_SIMULATED_VALUE_POSITION][props.period - 1]}`);
        console.log(props.results[el.name]);
        return <Outcome 
          title={el.title}
          key={el.key}
          value={props.results[el.name][AVERAGE_SIMULATED_VALUE_POSITION][props.period - 1] === 0 ? numeral(el.default).format(el.format) : numeral(props.results[el.name][AVERAGE_SIMULATED_VALUE_POSITION][props.period - 1]).format(el.format)}>
        </Outcome>;
      })}
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