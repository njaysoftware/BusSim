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
  Card,
  CardContent,
} from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

import {
  connect,
} from 'react-redux';
import numeral from 'numeral';
import styles from './style';
import PropTypes from 'prop-types';

const GENERAL_PARAM = [
  {
    name: 'Labor Cost/unit',
    value: 4,
    format: '$0.00',
  },
  {
    name: 'Material Cost/unit',
    value: 12,
    format: '$0.00',
  },
  {
    name: 'FG Carrying Cost/unit',
    value: 1,
    format: '$0.00',
  },
  {
    name: 'Suggested Retail Price/unit',
    value: 74.95,
    format: '$0.00',
  },
  {
    name: 'Capacity (Units)',
    value: 110000,
    format: '0,0',
  },
  {
    name: 'Prime Rate',
    value: .08,
    format: '0.00%',
  },
  {
    name: 'Tax Rate',
    value: .3,
    format: '0.00%',
  },
  {
    name: 'Penalty Rate',
    value: 4,
    format: '$0.00',
  },
  {
    name: 'Labor Cost/unit',
    value: .05,
    format: '0.00%',
  },
  {
    name: 'Depriciation Rate',
    value: .04,
    format: '0.00%',
  },
  {
    name: 'Loan Payment',
    value: .04,
    format: '0.00%',
  }
];

function _getDemandData(demand) {
  const DEMAND_COLUMN = 1;

  return demand[DEMAND_COLUMN].map((value, index) => {
    return {
      period: index,
      Demand: value,
    };
  }).filter(value => value.period >= 1);
}

function _renderLineChart(data) {

  return (
    <LineChart width={900} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <Line name="Demand" type="linear" dataKey="Demand" stroke="#766ceb" />
      <XAxis domain={[1, 12]} dataKey="period"/>
      <YAxis domain={[50000, 150000]} allowDataOverflow={true}/>
      <Legend verticalAlign="top" height={36}/>
    </LineChart>
  );
}

function _buildInfoCell(param) {
  return (
    <TableRow>
      <TableCell>{param.name}</TableCell>
      <TableCell>{numeral(param.value).format(param.format)}</TableCell>
    </TableRow>
  );
} 

const InformationDialog = (props) => {
  return (
    <Dialog open={props.displayOpen} onClose={props.handleClose} maxWidth='lg'>
      <DialogTitle>Information</DialogTitle>
      <DialogContent>
        <h3>General Parameters</h3>
        <div style={styles.outerWrapper}> 
          <Card>
            <CardContent>
              <Table size='small'>
                <TableHead>
                  <TableCell>Parameter</TableCell>
                  <TableCell>Value</TableCell>
                </TableHead>
                <TableBody>
                  {GENERAL_PARAM.map(param => _buildInfoCell(param))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div style={styles.outerWrapper}>
          {_renderLineChart(_getDemandData(props.results.Demand))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

InformationDialog.propTypes = {
  displayOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

export default connect(mapStateToProps)(InformationDialog);
