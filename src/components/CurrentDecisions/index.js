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
  Paper, Avatar,
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
  
  sale(period, resultsData, decisionData, incomeStatementData, balanceSheetData, cashFlowData) {
    /*Data: structure results Data
      {
        Demand: [[]]
        Sales: [[]]
        Production: [[]]
        Revenue or Rev ???: [[]]
        Profit: [[]],
        Inventory: [[]]
        Exp: [[]],
        Vc: [[]],
        Sp: [[]],
        Cash: [[]]
      },
      // incomeStatementData
      {
        dl : DirectLabor : [[]]
        dm : DirectMaterials : [[]]
        moh : ManufacturingOhio : [[]]
        gm : GrossMargin : [[]]
        invcc : InventoryCarrying : [[]]
        ga : GeneralAdmin : [[]]
        dep : Depreciation : [[]]
        penalty : 
        opinc
        interest : NetInterest : [[]]
        taxinc : TaxableIncome : [[]]
        tax : Tax : [[]]
        taxprev
      }
      // balanceSheetData 
      {
      AR : AccountsReceivable
      INvest : 
      Invamt: InventoryAmount ?? : [[]]
      Land: Land : [[]]
      Bldg : Building : [[]],
      Equip : Equipment : [[]],
      Edep: EquipmentDepreciation : [[]]: 
      Bdep : BuildingDepriciation : [[]]
      LTL : ShortTermLoans : [[]]
      STL : LongTermLoans : [[]]
      AP : AccountsPayable: [[]]
      Common: Not sure ???????
      RE : RetainedEarning : [[]]
      TCA : TotalCurrentAssets : [[]]
      TA : TotalAssets : [[]]
      TL : TotalLiabilties: [[]]
      TSE : TotalStockHoldersEquity : [[]]
      TLE : TotalLiabilityandEquity : [[]]
      }
      //
      {
        Investc : InvestingChange [[]]
        Finc : FinancialActivities: [[]]
        Opexp : OperatingExpenses : [[]]
        Indcash : IndirectCash : [[]]
        Dircash : DirectCash : [[]]
        Cashin: ???????????
        Cashout: ??????????????????
      }
    */
    const PERCENTAGE_FOR_SALES_XP = .1; 
    const AVERAGE_SIMULATED_VALUE_POSITION = 0;
    let salexp, demexp, dte, sumProfit,  sumSales, sumsp, taxCurrent, taxPrevious, payoff, changeInAccountsReceivable, changeInInventoryAmount, changeInAccountsPayable, netcash, returnOnSale;
    for(let index = 1; index <= 10; index++) {
      //Not sure what demexp is supposed to be yet. It is based on the results Demand data which doesn't seem to be populated yet
      demexp = this._randRange(resultsData.Demand[index][period] - 2000, resultsData.Demand[index][period] + 2000);
      //Not sure what this is for yet, but it is based on the market value times the demxp which is based on the the resulting Demand Data.
      salexp = demexp * Math.pow(
        decisionData.market[index][period] /
        decisionData.market[AVERAGE_SIMULATED_VALUE_POSITION][period],
        PERCENTAGE_FOR_SALES_XP
      );

      resultsData.Demand[index][period] = Math.floor(salexp);
      
      //Sales Adjustments based on the the quality decisions data
      salexp = demexp * Math.pow(
        decisionData.quality[index][period] /
        decisionData.quality[AVERAGE_SIMULATED_VALUE_POSITION][period],
        PERCENTAGE_FOR_SALES_XP
      );
      if (decisionData.price[index][period] > 45) { //What does the 45 represent and why such an arbitrary value
        salexp = resultsData.Demand[index][period] * (.4 + (45.0 - decisionData.price[index][period] * .1)); //Why these numbers
        
      } else {
        salexp = salexp * (1.0 + (decisionData.price[AVERAGE_SIMULATED_VALUE_POSITION][period] - decisionData.price[index][period] * .05)); //why these numbers?
      }

      salexp = salexp > resultsData.Demand[index][period] * 1 ? resultsData.Demand[index][period] * 1 : salexp; //What is the 1
      salexp = salexp > resultsData.Demand[index][period] * 0.2 ? resultsData.Demand[index][period] * 0.2 : salexp; //What is the .2

      resultsData.Sales[index][period] = resultsData.Production[index][period] + resultsData.Inventory[index][period - 1];

      if (resultsData.Sales[index][period] > salexp) {
        resultsData.Sales[index][period] = Math.floor(salexp);
      }

      resultsData.Inventory[index][period] = resultsData.Inventory[index][period - 1] + resultsData.Production[index][period] - resultsData.Sales[index][period];

      resultsData.Revenue[index][period] = decisionData.price[index][period] * resultsData.Sales[index][period];
         /* // incomeStatementData
          {
            dl : DirectLabor : [[]]
            dm : DirectMaterials : [[]]
            moh : ManufacturingOhio : [[]]
            gm : GrossMargin : [[]]
            invcc : InventoryCarrying : [[]]
            ga : GeneralAdmin : [[]]
            dep : Depreciation : [[]]
            penalty : 
            opinc
            interest : NetInterest : [[]]
            taxinc : TaxableIncome : [[]]
            tax : Tax : [[]]
            taxprev : taxPrevious
          }
          // balanceSheetData 
          {
          AR : AccountsReceivable
          INvest : 
          INvamt : I/
          Land: Land : [[]]
          Bldg : Building : [[]],
          Equip : Equipment : [[]],
          Edep: EquipmentDepreciation : [[]]: 
          Bdep : BuildingDepriciation : [[]]
          LTL : LongTermLoans : [[]]
          STL : ShortTermLoans : [[]]
          AP : AccountsPayable: [[]]
          Common: Not sure ???????
          RE : RetainedEarning : [[]]
          TCA : TotalCurrentAssets : [[]]
          TA : TotalAssets : [[]]
          TL : TotalLiabilties: [[]]
          TSE : TotalStockHoldersEquity : [[]]
          TLE : TotalLiabilityandEquity : [[]]
          }
          //
          {
            Investc : InvestingActivities: [[]]
            Finc : FinancialActivities: [[]]
            Opexp : OperatingExpenses : [[]]
            Indcash : IndirectCash : [[]]
            Dircash : DirectCash : [[]]
            Cashin: ???????????
            Cashout: ??????????????????
          }
        */ 
      incomeStatementData.DirectLabor[index][period] = Math.floor(
        resultsData.Sales[index][period] * 4 * Math.pow(
          decisionData.incentives[AVERAGE_SIMULATED_VALUE_POSITION][period] /
          decisionData.incentives[index][period],
          .1
        )
      );

      incomeStatementData.DirectMaterials[index][period] = Math.floor(
        resultsData.Sales[index][period] * 4 * Math.pow(
          decisionData.technology[AVERAGE_SIMULATED_VALUE_POSITION][period] /
          decisionData.technology[index][period],
          .1
        )
      );

      incomeStatementData.ManufacturingOhio[index][period] = Math.floor(
        resultsData.Sales[index][period] * 4
      );

      incomeStatementData.GrossMargin[index][period] = (
        resultsData.Revenue[index][period] -
        incomeStatementData.DirectLabor[index][period] -
        incomeStatementData.DirectMaterials[index][period] -
        incomeStatementData.ManufacturingOhio[index][period]
      );
      
      balanceSheetData.Land[index][period] = balanceSheetData.Land[index][period - 1];

      balanceSheetData.Building[index][period] = balanceSheetData.Building[index][period - 1];

      balanceSheetData.BuildingDepriciation[index][period] = balanceSheetData.BuildingDepriciation[index][period - 1] - (.01 * balanceSheetData.Building[index][period]);

      balanceSheetData.EquipmentDepriciation[index][period] = balanceSheetData.EquipmentDepriciation[index][period - 1] - (.04 * balanceSheetData.Equiptment[index][period - 1]);

      incomeStatementData.Depriciation = .04 * balanceSheetData.Equipment[index][period - 1] + .01 * balanceSheetData.Building[index][period];

      balanceSheetData.Equipment[index][period] = balanceSheetData.Equipment[index][period - 1];

      balanceSheetData.InventoryAmount[index][period] = resultsData.Inventory[index][period] * 20;

      incomeStatementData.InventoryCarrying[index][period] = resultsData[index][period] * 1;

      incomeStatementData.GeneralAdmin[index][period] = decisionData.Info[index][period] === 1 ? incomeStatementData.GeneralAdmin[index][0] + 20000 : incomeStatementData.GeneralAdmin[index][0]; // not sure what the 0 is for

      incomeStatementData.NetInterest[index][period] = balanceSheetData.LongTermLoans[index][period - 1] * .02 + balanceSheetData.ShortTermLoans[index][period - 1] * .1/4.0 - balanceSheetData.Invest[index][period - 1] * .06 / 4.0 + incomeStatementData.penality[index][period - 1];
      // @TODO: Exp needs to be renaimed to what is is actually used for
      resultsData.Expenses[index][period] = (
        decisionData.market[index][period] +
        decisionData.quality[index][period] +
        decisionData.technology[index][period] +
        decisionData.incentives[index][period] +
        incomeStatementData.InventoryCarrying[index][period] +
        incomeStatementData.GeneralAdmin[index][period]
      );

      //@TODO rename this variable I think this is OperatingProfit = opinc
      incomeStatementData.OperatingProfit[index][period] = (
        incomeStatementData.GrossMargin[index][period] -
        resultsData.Expenses[index][period] -
        incomeStatementData.Depriciation[index][period]
      );
      incomeStatementData.TaxableIncome[index][period] =  incomeStatementData.OperatingProfit[index][period] - incomeStatementData.NetInterest[index][period];

      taxCurrent = .3 * incomeStatementData.TaxableIncome[index][period];
      taxPrevious = incomeStatementData.TaxPrevious[index][period - 1];

      if (taxPrevious < 0) {
        taxCurrent += taxPrevious; // taxCurrent = taxCurrent + taxPrevious
      }
      if (taxCurrent < 0) {
        incomeStatementData.Tax[index][period] = 0;
        incomeStatementData.TaxPrevious[index][period] = taxCurrent; 
      } 
      else {
        incomeStatementData.Tax[index][period] = taxCurrent;
        incomeStatementData.TaxPrevious[index][period] = taxCurrent; 
      }

      resultsData.Profit[index][period] = (
        incomeStatementData.TaxableIncome[index][period] -
        incomeStatementData.Tax[index][period]
      );

      balanceSheetData.AccountsReceivable[index][period] = resultsData.Revenue[index][period] * .3;

      balanceSheetData.Invest[index][period] = decisionData.tBill[index][period];

      balanceSheetData.AccountsPayable[index][period] = incomeStatementData.DirectMaterials[index][period] * .4;

      balanceSheetData.LongTermLoans[index][period] = balanceSheetData.LongTermLoans[index][period - 1] - balanceSheetData.LongTermLoans[index][period - 1] * .01;

      balanceSheetData.ShortTermLoans[index][period] = balanceSheetData.ShortTermLoanst[index][period - 1];

      payoff = decisionData.loanPay[index][period];

      if (payoff > 0) {
        if(balanceSheetData.ShortTermLoans[index][period] > payoff) {
          balanceSheetData.ShortTermLoans[index][period] = balanceSheetData.ShortTermLoans[index][period] - payoff;
        } else {
          balanceSheetData.LongTermLoans[index][period] = balanceSheetData.LongTermLoans[index][period] - (payoff - balanceSheetData.ShortTermLoans[index][period]);

          balanceSheetData.ShortTermLoans[index][period] = 0;
          if (balanceSheetData.LongTermLoans[index][period] < 0) {
            payoff = payoff + balanceSheetData.LongTermLoans[index][period];
            balanceSheetData.LongTermLoans[index][period] = 0;
          }
        }
      }

      balanceSheetData.Common[index][period] = balanceSheetData.Common[index][period - 1];

      if(balanceSheetData.RetainedEarnings[index][period] - decisionData.dividends[index][period] > 0) {
        balanceSheetData.RetainedEarnings[index][period] = (
          balanceSheetData.RetainedEarnings[index][period - 1] +
          resultsData.Profit[index][period] -
          decisionData.dividends[index][period]
        );
      }
      else {
        decisionData.dividends[index][period] = 0;
        balanceSheetData.RetainedEarnings[index][period] = (
          balanceSheetData.RetainedEarnings[index][period - 1] +
          resultsData.Profit[index][period] -
          decisionData.dividends[index][period]);
      }
      balanceSheetData.TotalStockHoldersEquity[index][period] = balanceSheetData.Common[index][period] + balanceSheetData.RetainedEarnings[index][period];

      changeInAccountsReceivable = balanceSheetData.AccountsReceivable[index][period - 1] - balanceSheetData.AccountsReceivable[index][period];
      changeInInventoryAmount = balanceSheetData.InventoryAmount[index][period - 1] - balanceSheetData.InventoryAmount[index][period];
      changeInAccountsPayable = balanceSheetData.AccountsPayable[index][period] - balanceSheetData.AccountsReceivable[index][period - 1];
      
      cashFlowData.IndirectCash[index][period] = (
        resultsData.Profit[index][period] +
        incomeStatementData.Depriciation[index][period] +
        changeInAccountsReceivable +
        changeInInventoryAmount +
        changeInAccountsPayable
      );
      cashFlowData.CashIn[index][period] = (
        balanceSheetData.AccountsReceivable[index][period] +
        resultsData.Revenue[index][period] * .7
      );

      cashFlowData.CashOut[index][period] = (
        balanceSheetData.AccountsPayable[index][period - 1]+
        incomeStatementData.DirectMaterials[index][period] * 0.6 
      );

      cashFlowData.OperatingExpenses[index][period] = (
        resultsData.Expenses[index][period] +
        incomeStatementData.DirectLabor[index][period] +
        incomeStatementData.ManufacturingOhio[index][period]
      );

      cashFlowData.DirectCash[index][period] = (
        cashFlowData.CashIn[index][period] -
        cashFlowData.CashOut[index][period] -
        cashFlowData.OperatingExpenses[index][period] -
        incomeStatementData.Tax[index][period] -
        incomeStatementData.NetInterest[index][period] +
        changeInInventoryAmount
      );

      cashFlowData.InvestmentChange[index][period] = balanceSheetData.Invest[index][period - 1] - balanceSheetData.Invest[index][period];

      cashFlowData.FinancialActivities[index][period] = (
        balanceSheetData.ShortTermLoans[index][period] -
        balanceSheetData.ShortTermLoans[index][period - 1] +
        balanceSheetData.LongTermLoans[index][period] -
        balanceSheetData.LongTermLoans[index][period - 1] -
        decisionData.dividends[index][period]
      );

      netcash = (
        resultsData.Cash[index][period - 1] +
        cashFlowData.IndirectCash[index][period] +
        cashFlowData.InvestmentChange[index][period] +
        cashFlowData.FinancialActivities[index][period]
      );
      if (netcash < 0) {
        balanceSheetData.ShortTermLoans[index][period] = balanceSheetData.ShortTermLoans[index][period] - netcash;
        incomeStatementData.Penality[index][period] = -netcash * .05;
        resultsData.Cash[index][period] = 0;
        cashFlowData.FinancialActivities[index][period] = (
          balanceSheetData.ShortTermLoans[index][period] -
          balanceSheetData.ShortTermLoans[index][period - 1] +
          balanceSheetData.LongTermLoans[index][period] -
          balanceSheetData.LongTermLoans[index][period - 1] -
          decisionData.dividends[index][period]
        );
      } 
      else {
        resultsData.Cash[index][period] = netcash;
      }

      balanceSheetData.TotalLiabilities[index][period] = (
        balanceSheetData.AccountsPayable[index][period] +
        balanceSheetData.ShortTermLoans[index][period] +
        balanceSheetData.LongTermLoans[index][period] 
      );

      balanceSheetData.TotalCurrentAssets[index][period] = (
        balanceSheetData.AccountsReceivable[index][period] +
        balanceSheetData.Invest[index][period] +
        balanceSheetData.InventoryAmount[index][period] +
        resultsData.Cash[index][period]
      );

      balanceSheetData.TotalAssets[index][period] = (
        balanceSheetData.TotalCurrentAssets[index][period] + 
        balanceSheetData.Land[index][period] +
        balanceSheetData.Building[index][period] +
        balanceSheetData.Equipment[index][period] +
        balanceSheetData.EquipmentDepriciation[index][period] +
        balanceSheetData.BuildingDepriciation[index][period]
      );

      balanceSheetData.TotalLiabiltyAndEquity[index][period] = (
        balanceSheetData.TotalLiabilities[index][period] + 
        balanceSheetData.TotalStockHoldersEquity[index][period]
      );
 
      returnOnSale = resultsData.Profit[index][period] / resultsData.Revenue[index][period];

      dte = balanceSheetData.TotalLiabilities[index][period] / balanceSheetData.TotalLiabiltyAndEquity[index][period];

      if (resultsData.Profit[index][period] > 0) {
        resultsData.Sp[index][period] = resultsData[index][period - 1] + returnOnSale * 20 + (decisionData.dividends[index][period] / 400000) - dte; //Rename this Sp value to make it more descriptive
      }
      else {
        resultsData.Sp[index][period] = resultsData.Sp[index][period - 1] -1;
      }

      if(resultsData.Sp[index][period] < .99) {
        resultsData.Sp[index][period] = .99;
      }

      sumProfit += resultsData.Profit[index][period];
      sumSales += resultsData.Sales[index][period];
      sumsp += resultsData.Sp[index][period];
    }

    resultsData.Profit[AVERAGE_SIMULATED_VALUE_POSITION][period] = Math.floor(sumProfit/10);
    resultsData.Sales[AVERAGE_SIMULATED_VALUE_POSITION][period] = Math.floor(sumSales/10);
    resultsData.Sp[AVERAGE_SIMULATED_VALUE_POSITION][period] = sumsp / 10;
    resultsData.Period = period;
    //@TODO update the redux store with these new values
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