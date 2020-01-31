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
const tempData = [
  {
    quarter: 1,
    price: 34.45,
    marketing: 150137,
    quality: 145611,
    technology: 135904,
    incentives: 132977,
    sales: 70111,
    profit: 99656,
    stockPrice: 14.65,
  }
];
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
          {tempData.map(quarter => (
            <TableRow key={quarter.quarter}>
              <TableCell>{quarter.quarter}</TableCell>
              <TableCell>{quarter.price}</TableCell>
              <TableCell>{quarter.marketing}</TableCell>
              <TableCell>{quarter.quality}</TableCell>
              <TableCell>{quarter.technology}</TableCell>
              <TableCell>{quarter.incentives}</TableCell>
              <TableCell>{quarter.sales}</TableCell>
              <TableCell>{quarter.profit}</TableCell>
              <TableCell>{quarter.stockPrice}</TableCell>
            </TableRow>
          ))
            
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IndustryAverage;
