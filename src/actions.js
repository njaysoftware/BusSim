export const UPDATE_BALANCE_SHEET = 'UPDATE_BALANCE_SHEET';
export const RESET_BALANCE_SHEET = 'RESET_BALANCE_SHEET';
export const UPDATE_INCOME_BALANCE = 'UPDATE_INCOME_BALANCE';
export const RESET_INCOME_BALANCE = 'RESET_INCOME_BALANCE';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const RESET_RESULTS = 'RESET_RESULTS'; 
export const UPDATE_DECISIONS = 'UPDATE_DECISIONS';
export const RESET_DECISIONS = 'RESET_DECISIONS';
export const UPDATE_CASH_FLOW = 'UPDATE_CASH_FLOW';
export const RESET_CASH_FLOW = 'RESET_CASH_FLOW';
export const INCREMENT_PERIOD = 'INCREMENT_PERIOD';
export const RESET_PERIOD = 'RESET_PERIOD';


export function updateBalanceSheet(payload) {
  return {
    type: UPDATE_BALANCE_SHEET,
    payload,
  };
}

export function resetBalanceSheet() {
  return {
    type: RESET_BALANCE_SHEET,
  };
} 

export function updateIncomeBalance(payload) {
  return {
    type: UPDATE_INCOME_BALANCE,
    payload,
  };
}

export function resetIncomeBalance() {
  return {
    type: RESET_INCOME_BALANCE,
  };
}

export function updateResults(payload) {
  return {
    type: UPDATE_RESULTS,
    payload,
  };
}

export function resetResults() {
  return {
    type: RESET_RESULTS,
  };
}

export function updateDecisions(payload) {
  return {
    type: UPDATE_DECISIONS,
    payload,
  };
}

export function resetDecisions() {
  return {
    type: RESET_DECISIONS,
  };
}

export function updateCashFlow(payload) {
  return {
    type: UPDATE_CASH_FLOW,
    payload,
  };
}

export function resetCashFlow() {
  return {
    type: RESET_CASH_FLOW,
  };
}

export function incrementPeriod() {
  return {
    type: INCREMENT_PERIOD,
  };
}

export function resetPeriod() {
  return {
    type: RESET_PERIOD,
  };
}