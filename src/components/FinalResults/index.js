import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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

const _renderDataCell = (number) => {
  return <TableCell>{numeral(number).format('0,0')}</TableCell>;
};

// @TODO
// const SIMULATED_DATA_RESULTS = 1;
// const INPUT_DATA_COLUMN = 1;
const FinalResultsDialog = (props) => {
  return (
    <Dialog open={props.displayOpen} onClose={props.handleClose} maxWidth='lg'>
      <DialogTitle>Financial Statements</DialogTitle>
      <DialogContent>
        <div style={styles.outerContainer}>
          <Paper>
            <Table>
              <TableHead>
                <TableCell>Team</TableCell>
                <TableCell>AvgPrice</TableCell>
                <TableCell>Sales</TableCell>
                <TableCell>Revenue</TableCell>
                <TableCell>Inventory</TableCell>
                <TableCell>BudgetExp</TableCell>
                <TableCell>CumProfit</TableCell>
                <TableCell>ROS</TableCell>
                <TableCell>Cash</TableCell>
                <TableCell>StockPrice</TableCell>
              </TableHead>
              <TableBody>
                {props.results.Demand.map((teamArray, index) => {
                  if (index < 1) {
                    return null;
                  } 
                  return (
                    <TableRow key={index}>
                      <TableCell>{index}</TableCell>
                      <TableCell>{props.decision.price[index][0]}</TableCell>
                      {_renderDataCell(props.results.Sales[index].reduce((acc, val) => acc + val))}
                      {_renderDataCell(props.results.Revenue[index].reduce((acc, val) => acc + val))}
                      {_renderDataCell(props.results.Inventory[index][12])}
                      {_renderDataCell(props.results.Expenses[index].reduce((acc, val) => acc + val))}
                      {_renderDataCell(props.results.Profit[index].reduce((acc, val) => acc + val))}
                      {_renderDataCell(props.results.Profit[index].reduce((acc, val) => acc + val) / props.results.Revenue[index].reduce((acc, val) => acc + val))}
                      {_renderDataCell(props.results.Cash[index][12])}
                      {_renderDataCell(props.results.Sp[index][12])}
                    </TableRow>
                  );
                })}
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

FinalResultsDialog.propTypes = {
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
export default connect(mapStateToProps)(FinalResultsDialog);