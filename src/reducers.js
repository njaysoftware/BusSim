import {
  combineReducers
} from 'redux';
import {
  UPDATE_BALANCE_SHEET,
  UPDATE_INCOME_BALANCE,
  UPDATE_RESULTS,
  UPDATE_DECISIONS,
  UPDATE_CASH_FLOW,
  RESET_BALANCE_SHEET,
  RESET_INCOME_BALANCE,
  RESET_RESULTS,
  RESET_DECISIONS,
  RESET_CASH_FLOW,
} from './actions';
function _initalData() {
  let initialArray = [];
  for (let index = 0; index <= 10; index++) {
    initialArray.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
  return initialArray;
}
function balanceSheet(state = {
  AccountsReceivable: _initalData(),
  Land: _initalData(),
  Building: _initalData(),
  BuildingDepriciation: _initalData(),
  EquipmentDepriciation: _initalData(),
  Equipment: _initalData(),
  InventoryAmount: _initalData(),
  Invest: _initalData(),
  AccountsPayable: _initalData(),
  LongTermLoans: _initalData(),
  ShortTermLoans: _initalData(),
  Common: _initalData(),
  RetainedEarnings: _initalData(),
  TotalStockHoldersEquity: _initalData(),
  TotalLiabilities: _initalData(),
  TotalCurrentAssets: _initalData(),
  TotalAssets: _initalData(),
  TotalLiabiltyAndEquity: _initalData(),
}, action) {
  switch (action.type) {

  case UPDATE_BALANCE_SHEET:
    return action.payload;
  case RESET_BALANCE_SHEET:
    return {
      AccountsReceivable: _initalData(),
      Land: _initalData(),
      Building: _initalData(),
      BuildingDepriciation: _initalData(),
      EquipmentDepriciation: _initalData(),
      Equipment: _initalData(),
      InventoryAmount: _initalData(),
      Invest: _initalData(),
      AccountsPayable: _initalData(),
      LongTermLoans: _initalData(),
      ShortTermLoans: _initalData(),
      Common: _initalData(),
      RetainedEarnings: _initalData(),
      TotalStockHoldersEquity: _initalData(),
      TotalLiabilities: _initalData(),
      TotalCurrentAssets: _initalData(),
      TotalAssets: _initalData(),
      TotalLiabiltyAndEquity: _initalData(),
    };
  default:
    return state;
  }
}

function incomeStatement(state = {
  DirectLabor: _initalData(),
  DirectMaterials: _initalData(),
  ManufacturingOhio: _initalData(),
  GrossMargin: _initalData(),
  InventoryCarrying: _initalData(),
  GeneralAdmin: _initalData(),
  Depriciation: _initalData(),
  Penalty: _initalData(),
  OperatingProfit: _initalData(),
  NetInterest: _initalData(),
  TaxableIncome: _initalData(),
  Tax: _initalData(),
  TaxPrevious: _initalData(),
}, action) {

  switch (action.type) {
  case UPDATE_INCOME_BALANCE:
    return action.payload;
  case RESET_INCOME_BALANCE:
    return {
      DirectLabor: _initalData(),
      DirectMaterials: _initalData(),
      ManufacturingOhio: _initalData(),
      GrossMargin: _initalData(),
      InventoryCarrying: _initalData(),
      GeneralAdmin: _initalData(),
      Depriciation: _initalData(),
      penalty: _initalData(),
      opinc: _initalData(),
      NetInterest: _initalData(),
      TaxableIncome: _initalData(),
      Tax: _initalData(),
      TaxPrevious: _initalData(),
    };
  default:
    return state;
  }

}
function results(state = {
  Demand: _initalData(),
  Sales: _initalData(),
  Production: _initalData(),
  Revenue: _initalData(),
  Profit: _initalData(),
  Inventory: _initalData(),
  Expenses: _initalData(),
  Vc: _initalData(),
  Sp: _initalData(),
  Cash: _initalData(),
}, action) {

  switch (action.type) {
  case UPDATE_RESULTS:
    return action.payload;
  case RESET_RESULTS:
    return {
      Demand: _initalData(),
      Sales: _initalData(),
      Production: _initalData(),
      Revenue: _initalData(),
      Profit: _initalData(),
      Inventory: _initalData(),
      Exp: _initalData(),
      Vc: _initalData(),
      Sp: _initalData(),
      Cash: _initalData(),
    };
  default:
    return state;
  }
}

function decision(state = {
  price: _initalData(),
  market: _initalData(),
  quality: _initalData(),
  technology: _initalData(),
  incentives: _initalData(),
  loanPay: _initalData(),
  dividends: _initalData(),
  production: _initalData(),
  tBill: _initalData(),
  Info: _initalData(),
}, action) {

  switch (action.type) {
  case UPDATE_DECISIONS:
    return action.payload;
  case RESET_DECISIONS:
    return {
      price: _initalData(),
      marketing: _initalData(),
      quality: _initalData(),
      technology: _initalData(),
      incentives: _initalData(),
      loanPay: _initalData(),
      dividends: _initalData(),
      tBill: _initalData(),
    };
  default:
    return state;
  }
}

function cashFlow(state = {
  InvestmentChange: _initalData(),
  FinancialActivities: _initalData(),
  OperatingExpenses: _initalData(),
  IndirectCash: _initalData(),
  DirectCash: _initalData(),
  CashIn: _initalData(),
  CashOut: _initalData(),
}, action) {

  switch (action.type) {
  case UPDATE_CASH_FLOW: 
    return action.payload;
  case RESET_CASH_FLOW:
    return {
      InvestingChange: _initalData(),
      FinancialActivities: _initalData(),
      OperatingExpenses: _initalData(),
      IndirectCash: _initalData(),
      DirectCash: _initalData(),
      Cashin: _initalData(),
      Cashout: _initalData(),
    };
  default:
    return state;
  }
}
export const rootReducer = combineReducers({
  balanceSheet,
  incomeStatement,
  results,
  decision,
  cashFlow,
});
