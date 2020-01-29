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
  Card,
} from '@material-ui/core';

const CurrentInputs = [
  {
    key: 1,
    title: 'Price ($)',
    startValue: 30,
    changeValue: .5,
  },
  {
    key: 2,
    title: 'Marketing ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 3,
    title: 'Quality ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 4,
    title: 'Technology ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 5,
    title: 'Incentives ($000)',
    startValue: 105,
    changeValue: 5,
  },
  {
    key: 6,
    title: 'Dividends ($000)',
    startValue: 0,
    changeValue: 5,
  },
  {
    key: 7,
    title: 'T-Bill Invest',
    startValue: 0,
    changeValue: 10,
  },
  {
    key: 8,
    title: 'Loan Pay ($000)',
    startValue: 0,
    changeValue: 10,
  },
  {
    key: 9,
    title: 'Production',
    startValue: 80,
    changeValue: 1,
  },
];
const CurrentDecisions = (props) => {
  return (
    <Card>
      {CurrentInputs.map((element) => {
        return <CurrentDecisionsInput title={element.title} startValue={element.startValue} changeValue={element.changeValue} key={element.key}></CurrentDecisionsInput>
      })}
    </Card>
  );
};

export default CurrentDecisions;