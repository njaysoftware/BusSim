/**
Author: Nathaniel Padgett
Date: 01/31/2020
Copyright: Nathaniel Padgett 2020
Purpose: To store the current .
 */

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import numeral from 'numeral';

function _formatIndustrialData(decisionData, resultsData, period) {
  const AVERAGE_POSITION = 0;
  const COLUMN_OF_INFO_BOOL = 1;
  let formattedData = [];

  console.log(decisionData);
  for (let index = 1; index <= period; index++) {
    if(decisionData.Info[COLUMN_OF_INFO_BOOL][index]) {
      formattedData.push({
        Quarter: index,
        Price: decisionData.price[AVERAGE_POSITION][index],
        Marketing: decisionData.market[AVERAGE_POSITION][index],
        Quality: decisionData.quality[AVERAGE_POSITION][index],
        Technology: decisionData.technology[AVERAGE_POSITION][index],
        Incentives: decisionData.incentives[AVERAGE_POSITION][index],
        Sales: resultsData.Sales[AVERAGE_POSITION][index],
        Profit: resultsData.Profit[AVERAGE_POSITION][index],
        StockPrice: resultsData.Sp[AVERAGE_POSITION][index],
      });
    }
  }
  return formattedData;
}

function _buildDataRow(quarter) {
  const FORMAT_REGULAR = ['Quarter', 'Sales'];
  return (
    <TableRow key={quarter.Quarter}>
      {Object.entries(quarter).map((value, index) => <TableCell key={index}>{numeral(value[1]).format(FORMAT_REGULAR.includes(value[0]) ? '0,0' : '$0,0.00')}</TableCell>)}
    </TableRow>
  );
}

const IndustryAverage = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="Industry Average Table">
        <TableHead>
          <TableRow>
            <TableCell>Quarter</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Marketing</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Technology</TableCell>
            <TableCell>Incentives</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Profit</TableCell>
            <TableCell>Stock Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_formatIndustrialData(props.decision, props.results, props.period).map(quarter => _buildDataRow(quarter))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

IndustryAverage.propTypes = {
  decision: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  period: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    decision: state.decision,
    results: state.results,
  };
}

export default connect(mapStateToProps)(IndustryAverage);
