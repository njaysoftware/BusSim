/**
Author: Nathaniel Padgett
Date: 01/27/2020
Copyright: Nathaniel Padgett 2020
Purpose: styles for the application component
 */

export default {
  gridContainer: {
    display: 'grid',
    height: '100%',
    gridGap: '10px',
    padding: '10px',
    paddingTop: '20px',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  },
  currentDecisionsContainer: {
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  currentOutputsContainer: {
  },
  industryAverageContainer: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    height: '250px',
  },
  buttonColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonRow: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
  },
  paper: {
    height: '35%',
  },
};
