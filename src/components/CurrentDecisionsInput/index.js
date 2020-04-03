/**
Author: Nathaniel Padgett
Date: 01/24/2020
Copyright: Nathaniel Padgett 2020
Purpose:
Purpose is to supply a repeatable component that can be used as a repeat for the different states.
 */
import React from 'react';
import Styles from './styles';
import {
  IconButton,
  ButtonGroup,
  Chip,
  makeStyles,
} from '@material-ui/core';
// @TODO: Figure out why this does not work as a relative import
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PropTypes from 'prop-types';

const useStyles = makeStyles(Styles);
const CurrentDecisionsInput = (props) => {
  // props are a title or type, a function to call when value changes, a key, a starting value, and a increment and decrementer
  const classes = useStyles();
  const [counter, setCounter] = React.useState(props.startValue);
  
  function handleChange(change) {
    if (counter + change < 0) {
      setCounter(counter);
      return;
    }
    props.valueChangeEvent(counter + change);
    setCounter(counter + change);
  }
  return (
    <div style={Styles.Container}>
      <div style={Styles.LabelContainer}>
        <label>{props.title}</label>
      </div>
      <div style={Styles.ChipContainer}>
        <Chip label={counter}></Chip>
      </div>
      <div style={Styles.ButtonContainer}>
        <ButtonGroup
          orientation="vertical"
        >
          <IconButton
            onClick={() => handleChange(props.changeValue)}
            classes={{
              root: classes.customButton,
            }}
          >
            <KeyboardArrowUpIcon fontSize='small'/>
          </IconButton>
          <IconButton
            onClick={() => handleChange(-props.changeValue)}
            classes={{
              root: classes.customButton,
            }}
          >
            <KeyboardArrowDownIcon fontSize='small'/>
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  );
};

CurrentDecisionsInput.propTypes = {
  changeValue: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  valueChangeEvent: PropTypes.func.isRequired,
  startValue: PropTypes.number.isRequired,
};
export default CurrentDecisionsInput;