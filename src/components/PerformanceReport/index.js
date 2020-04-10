import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core';
import {
  connect,
} from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import numeral from 'numeral';
import styles from './styles';
import PropTypes from 'prop-types';

const NumericalFormat = {
  Quarter: '0,0',
  Demand: '0,0',
  Sales: '0,0',
  Production: '0,0',
  Inventory: '0,0',
  Revenue: '$0,0.00',
  Expenses: '$0,0.00',
  Profit: '$0,0.00',
  Cash: '$0,0.00',
  StockPrice: '$0,0.00',
};

function _renderLineChart(data) {
  return (
    <LineChart width={1000} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <Line name="Sales" type="linear" dataKey="Sales" stroke="#E76C36" />
      <Line name="Production" type="linear" dataKey="Production" stroke="#e3372b" />
      <Line name="Capacity" type="linear" dataKey="Capacity" stroke="#2be38a" />
      <Line name="Demand" type="linear" dataKey="Demand" stroke="#766ceb" />
      <XAxis domain={[1, 12]} dataKey="Quarter"/>
      <YAxis domain={[50000, 150000]} allowDataOverflow={true}/>
      <Legend verticalAlign="top" height={36}/>
    </LineChart>
  );
}

function _convertResultData(results, period) {
  const FINAL_RESULTS_ROW = 1;
  let newResults = []; // @TODO rename this variable
  
  for (let index = 1; index <= period; index++) {
    newResults.push({
      Quarter: index,
      Demand: results.Demand[FINAL_RESULTS_ROW][index],
      Sales: results.Sales[FINAL_RESULTS_ROW][index],
      Production: results.Production[FINAL_RESULTS_ROW][index],
      Inventory: results.Inventory[FINAL_RESULTS_ROW][index],
      Revenue: results.Revenue[FINAL_RESULTS_ROW][index],
      Expenses: results.Expenses[FINAL_RESULTS_ROW][index],
      Profit: results.Profit[FINAL_RESULTS_ROW][index],
      Cash: results.Cash[FINAL_RESULTS_ROW][index],
      StockPrice: results.Sp[FINAL_RESULTS_ROW][index],
      Capacity: 110000,
    });
  }

  return newResults;
}
function _buildDataRow(Row) {
  return (
    <TableRow>
      {Object.entries(Row).map((values, index) => <TableCell key={`${index}`}>{numeral(values[1]).format(NumericalFormat[values[0]])}</TableCell>)}
    </TableRow>
  );
}
const PerformanceDialog = (props) => {
  return (
    <Dialog open={props.displayOpen} onClose={props.handleClose} maxWidth='lg'>
      <DialogTitle>Performance Report</DialogTitle>
      <DialogContent>
        <div style={styles.outerWrapper}>
          <div style={styles.childContainer}>
            <Table>
              <TableHead>
                <TableCell>Quarter</TableCell>
                <TableCell>Demand</TableCell>
                <TableCell>Sales</TableCell>
                <TableCell>Production</TableCell>
                <TableCell>Inventory</TableCell>
                <TableCell>Revenue</TableCell>
                <TableCell>Expenses</TableCell>
                <TableCell>Profit</TableCell>
                <TableCell>Cash</TableCell>
                <TableCell>Stock Price</TableCell>
              </TableHead>
              <TableBody>
                {_convertResultData(props.results, props.period).map(value => _buildDataRow(value))}
              </TableBody>
            </Table>
            
          </div>
          <div style={styles.headerContainer}>
            <h3>Demand-Sales-Production Comparison</h3>
          </div>
          <div style={styles.childContainer}>
            {_renderLineChart(_convertResultData(props.results, props.period))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

PerformanceDialog.propTypes = {
  displayOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  period: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

export default connect(mapStateToProps)(PerformanceDialog);
