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
  _randRange(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }
  _ai(decisionData, resultData, period) {
    /*decisionData shape
    {
      price: [[], []]
      marketing: [[]],
      quality: [[]],
      technology: [[]],
      incentives: [[]],
      loanPay: [[]],
      dividends: [[]],
      tBill: [[]],
    }
    */
    const FIRST_PERIOD = 0;
    const NUMBER_OF_TIMES_SIMULATED = 9;
    const AVERAGE_COLUMN_IN_DECISION_DATA = 0;

    let sumPrice = 0, sumMarket = 0, sumQuality = 0, sumTechnology = 0, sumIncentives = 0;
    for (let index = 2; index <= 10; index++) {
      
      decisionData.price[index][period] = this._randRange(decisionData.price[index][FIRST_PERIOD] -2, decisionData.price[index][FIRST_PERIOD] + 2);
      decisionData.market[index][period] = Math.floor(this._randRange(decisionData.market[index][FIRST_PERIOD] -20000, decisionData.market[index][FIRST_PERIOD] + 20000));
      decisionData.quality[index][period] = Math.floor(this._randRange(decisionData.quality[index][FIRST_PERIOD] -20000, decisionData.quality[index][FIRST_PERIOD] + 20000));
      decisionData.technology[index][period] = Math.floor(this._randRange(decisionData.technology[index][FIRST_PERIOD] -20000, decisionData.technology[index][FIRST_PERIOD] + 20000));
      decisionData.incentives[index][period] = Math.floor(this._randRange(decisionData.incentives[index][FIRST_PERIOD] -20000, decisionData.incentives[index][FIRST_PERIOD] + 20000));
      decisionData.loanPay[index][period] = 0;
      decisionData.dividends[index][period] = period * 3000;
      decisionData.tBill[index][period] = 0;
      decisionData.production[index][period] = resultData.demand[index][period];
      
      sumPrice += decisionData.price[index][period];
      sumMarket += decisionData.market[index][period];
      sumQuality += decisionData.quality[index][period];
      sumTechnology += decisionData.technology[index][period];
      sumIncentives += decisionData.incentives[index][period];
    }
    
    decisionData.price[AVERAGE_COLUMN_IN_DECISION_DATA][period] = sumPrice / NUMBER_OF_TIMES_SIMULATED;
    
    decisionData.market[AVERAGE_COLUMN_IN_DECISION_DATA][period] = sumMarket / NUMBER_OF_TIMES_SIMULATED;
    
    decisionData.quality[AVERAGE_COLUMN_IN_DECISION_DATA][period] = sumQuality / NUMBER_OF_TIMES_SIMULATED;
    
    decisionData.technology[AVERAGE_COLUMN_IN_DECISION_DATA][period] = sumTechnology / NUMBER_OF_TIMES_SIMULATED;
    
    decisionData.incentives[AVERAGE_COLUMN_IN_DECISION_DATA][period] = sumIncentives / NUMBER_OF_TIMES_SIMULATED;
    
    return decisionData;
  }
  simulate() {
    
  }
  
  sale(period) {
    let salexp, demexp, dte, sump,  sums, sumsp;

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