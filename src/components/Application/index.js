/**
Author: Nathaniel Padgett
Date: 01/24/2020
Copyright: Nathaniel Padgett 2020
Purpose:
To provide a css grid layout for the different component. Also, provides a place for dialogs to open and close from.
 */
import React from 'react';
import Styles from './styles';
import CurrenctDecisionsInput from '../CurrentDescionsComponent/index';
const Application = () => {
  return (
    <div style={Styles.gridContainer}>
      <div style={Styles.currentDecisionsContainer}>
        <CurrenctDecisionsInput title="Price ($)" startValue={30} changeValue={.5}></CurrenctDecisionsInput>
      </div>
      <div style={Styles.buttonsContainer}>This is block 1</div>
      <div style={Styles.currentOutputsContainer}>This is block 1</div>
      <div style={Styles.industryAverageContainer}>This is block 1</div>
    </div>
  );
};

export default Application;