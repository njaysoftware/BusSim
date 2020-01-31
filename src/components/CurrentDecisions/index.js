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
} from '@material-ui/core';

const CurrentInputs = [
  {
    key: 1,
    name: 'price',
    title: 'Price ($)',
    startValue: 30,
    changeValue: .5,
  },
  {
    key: 2,
    name: 'marketing',
    title: 'Marketing ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 3,
    name: 'quality',
    title: 'Quality ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 4,
    name: 'technology',
    title: 'Technology ($000)',
    startValue: 100,
    changeValue: 5,
  },
  {
    key: 5,
    name: 'incentives',
    title: 'Incentives ($000)',
    startValue: 105,
    changeValue: 5,
  },
  {
    key: 6,
    name: 'dividends',
    title: 'Dividends ($000)',
    startValue: 0,
    changeValue: 5,
  },
  {
    key: 7,
    name: 'tBillInvestments',
    title: 'T-Bill Invest',
    startValue: 0,
    changeValue: 10,
  },
  {
    key: 8,
    name: 'loanPay',
    title: 'Loan Pay ($000)',
    startValue: 0,
    changeValue: 10,
  },
  {
    key: 9,
    name: 'production',
    title: 'Production',
    startValue: 80,
    changeValue: 1,
  },
];
class CurrentDecisions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      production: CurrentInputs[8].startValue,
      loanPay: CurrentInputs[7].startValue,
      tBillInvestments: CurrentInputs[6].startValue,
      dividends: CurrentInputs[5].startValue,
      incentives: CurrentInputs[4].startValue,
      technology: CurrentInputs[3].startValue,
      quality: CurrentInputs[2].startValue,
      marketing: CurrentInputs[1].startValue,
      price: CurrentInputs[0].startValue,
    };
  }
  
  render() {
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
              this.setState({[element.name]: value});
            }}
          />;
        })}
      </Paper>
    );
  }
}

export default CurrentDecisions;