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
import styles from './style';

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
                  <TableCell>$2,680,558</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >COG Sold:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Direct Labor</TableCell>
                  <TableCell>$289,384</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Direct Materials</TableCell>
                  <TableCell>$289,384</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'>Manufacturing</TableCell>
                  <TableCell>$289,384</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >Gross Margin</TableCell>
                  <TableCell>$289,384</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell ><b>Budget Exp:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Marketing</b></TableCell>
                  <TableCell>$289,030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Quality</b></TableCell>
                  <TableCell>$289,030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Technology</b></TableCell>
                  <TableCell>$289,030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Compensation</b></TableCell>
                  <TableCell>$289,030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell ><b>General Exp:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inventory Carrying</b></TableCell>
                  <TableCell>$289,030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Depreciation</b></TableCell>
                  <TableCell>$105,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>General & Admin</b></TableCell>
                  <TableCell>$105,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Operating Profit</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>General & Admin</b></TableCell>
                  <TableCell>$105,00</TableCell>
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
                  <TableCell align='right'>$100,000</TableCell>
                  <TableCell align='right'>$95,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>T-Bills</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Accounts Receivable</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Inventory Value</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Current Assets</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Plant and Equipment</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Land</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Building</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Less Accum Dep</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Equipment</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Less Accum Dep</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Assets</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Liabilities:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Current Liabilities</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Accounts Payable</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Short Tearm Loans</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Long Term Liabilities</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Long Term Loans</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Liabilities</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Equity:</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Common Stock</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Retained Earnings</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='right'><b>Total Stockholder Equity</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Liability & Equity</b></TableCell>
                  <TableCell align='right'>$0</TableCell>
                  <TableCell align='right'>$0</TableCell>
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