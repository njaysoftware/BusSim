import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import numeral from 'numeral';
import styles from './style';

const _renderDataCell = number => {
  return <TableCell>{numeral(number).format('$0,0.00')}</TableCell>;
};

const SIMULATED_DATA_RESULTS = 1;
const INPUT_DATA_COLUMN = 1;
const FinancialStatementDialog = (props) => {
  const [value, setValue] = React.useState(0);
  return (
    <Dialog open={props.displayOpen} onClose={props.handleClose} maxWidth='lg'>
      <Tabs
        value={value}
        label='Period'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        aria-label='period tabs'
        scrollButtons='on'
        variant='scrollable'
      >
        <Tab label='1' />
        <Tab label='2' />
        <Tab label='3' />
        <Tab label='4' />
        <Tab label='5' />
        <Tab label='6' />
        <Tab label='7' />
        <Tab label='8' />
        <Tab label='9' />
        <Tab label='10' />
        <Tab label='11' />
        <Tab label='12' />
      </Tabs>
      {console.log(props.incomeStatement)}
      <DialogTitle>Financial Statements</DialogTitle>
      <DialogContent>
        <div style={styles.outerContainer}>
          <Paper>
            <Table>
              <TableHead>
                <TableCell>Income</TableCell>
                <TableCell>Value</TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Revenue:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Net Sales</TableCell>
                  {_renderDataCell(props.results.Revenue[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell >COG Sold:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Direct Labor</TableCell>
                  {_renderDataCell(props.incomeStatement.DirectLabor[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Direct Materials</TableCell>
                  {_renderDataCell(props.incomeStatement.DirectMaterials[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Manufacturing</TableCell>
                  {_renderDataCell(props.incomeStatement.ManufacturingOhio[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell >Gross Margin</TableCell>
                  {_renderDataCell(props.incomeStatement.GrossMargin[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell ><b>Budget Exp:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Marketing</b></TableCell>
                  {_renderDataCell(props.decision.market[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Quality</b></TableCell>
                  {_renderDataCell(props.decision.quality[INPUT_DATA_COLUMN][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Technology</b></TableCell>
                  {_renderDataCell(props.decision.technology[INPUT_DATA_COLUMN][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Compensation</b></TableCell>
                  {_renderDataCell(props.decision.incentives[INPUT_DATA_COLUMN][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell ><b>General Exp:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inventory Carrying</b></TableCell>
                  {_renderDataCell(props.incomeStatement.InventoryCarrying[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Depreciation</b></TableCell>
                  {_renderDataCell(props.incomeStatement.Depriciation[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>General & Admin</b></TableCell>
                  {_renderDataCell(props.incomeStatement.GeneralAdmin[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Operating Profit</b></TableCell>
                  {_renderDataCell(props.incomeStatement.OperatingProfit[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Net Interest</b></TableCell>
                  {_renderDataCell(props.incomeStatement.NetInterest[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Taxable Income</b></TableCell>
                  {_renderDataCell(props.incomeStatement.TaxableIncome[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Tax</b></TableCell>
                  {_renderDataCell(props.incomeStatement.Tax[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Net Income</b></TableCell>
                  {_renderDataCell(props.incomeStatement.TaxableIncome[SIMULATED_DATA_RESULTS][value + 1] - props.incomeStatement.Tax[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper>
            <Table>
              <TableHead>
                <TableCell>Balance</TableCell>
                <TableCell>Previous</TableCell>
                <TableCell>Current</TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><b>Assets:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Current Assets</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Cash</b></TableCell>
                  {_renderDataCell(props.results.Cash[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.results.Cash[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>T-Bills</b></TableCell>
                  {_renderDataCell(props.decision.tBill[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.decision.tBill[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Accounts Receivable</b></TableCell>
                  {_renderDataCell(props.balanceSheet.AccountsReceivable[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.AccountsReceivable[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inventory Value</b></TableCell>
                  {_renderDataCell(props.results.Inventory[SIMULATED_DATA_RESULTS][value] * 20)}
                  {_renderDataCell(props.results.Inventory[SIMULATED_DATA_RESULTS][value + 1] * 20)}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Current Assets</b></TableCell>
                  {_renderDataCell(props.balanceSheet.TotalCurrentAssets[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.TotalCurrentAssets[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Plant and Equipment</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Land</b></TableCell>
                  {_renderDataCell(props.balanceSheet.Land[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.Land[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Building</b></TableCell>
                  {_renderDataCell(props.balanceSheet.Building[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.Building[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Less Accum Dep</b></TableCell>
                  {_renderDataCell(props.balanceSheet.BuildingDepriciation[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.BuildingDepriciation[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Equipment</b></TableCell>
                  {_renderDataCell(props.balanceSheet.Equipment[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.Equipment[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Less Accum Dep</b></TableCell>
                  {_renderDataCell(props.balanceSheet.EquipmentDepriciation[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.EquipmentDepriciation[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Assets</b></TableCell>
                  {_renderDataCell(props.balanceSheet.TotalAssets[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.TotalAssets[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Liabilities:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Current Liabilities</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Accounts Payable</b></TableCell>
                  {_renderDataCell(props.balanceSheet.AccountsPayable[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.AccountsPayable[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Short Tearm Loans</b></TableCell>
                  {_renderDataCell(props.balanceSheet.ShortTermLoans[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.ShortTermLoans[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Long Term Liabilities</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Long Term Loans</b></TableCell>
                  {_renderDataCell(props.balanceSheet.LongTermLoans[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.LongTermLoans[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Liabilities</b></TableCell>
                  {_renderDataCell(props.balanceSheet.TotalLiabilities[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.TotalLiabilities[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Equity:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Common Stock</b></TableCell>
                  {_renderDataCell(props.balanceSheet.Common[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.Common[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Retained Earnings</b></TableCell>
                  {_renderDataCell(props.balanceSheet.RetainedEarnings[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.RetainedEarnings[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Stockholder Equity</b></TableCell>
                  {_renderDataCell(props.balanceSheet.TotalStockHoldersEquity[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.TotalStockHoldersEquity[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Liability & Equity</b></TableCell>
                  {_renderDataCell(props.balanceSheet.TotalLiabiltyAndEquity[SIMULATED_DATA_RESULTS][value])}
                  {_renderDataCell(props.balanceSheet.TotalLiabiltyAndEquity[SIMULATED_DATA_RESULTS][value + 1])}
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper>
            <Table>
              <TableHead>
                <TableCell>Cash Flow</TableCell>
                <TableCell>Amount</TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><b>Indirect:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Net Income</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Bldg & Equip Dep</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>(Inc)Dec in Ar</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>(Inc)Dec in Inv</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inc(Dec) in AP</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Cash from Op Activities</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Direct:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Collections from Cust</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Payments to Suppliers</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Operating Expenses</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inventory</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Net Interest</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Taxes Paid</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Cash from Op Activities</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Investing Activities:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>(Purchase)Return</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Financing Activities:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Borrowing(Payment)</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Net Inc(Dec) in Cash</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Previous Cash</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell ><b>Cash balance</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </DialogContent>
      <DialogActions>

      </DialogActions>
    </Dialog>
  );
};

FinancialStatementDialog.propTypes = {
  displayOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  balanceSheet: PropTypes.object.isRequired,
  incomeStatement: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  decision: PropTypes.object.isRequired,
  cashFlow: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    balanceSheet: state.balanceSheet,
    incomeStatement: state.incomeStatement,
    results: state.results,
    decision: state.decision,
    cashFlow: state.cashFlow,
  };
}
export default connect(mapStateToProps)(FinancialStatementDialog);