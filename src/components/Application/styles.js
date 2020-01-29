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
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '2fr 1fr'
  },
  currentDecisionsContainer: {
  },
  buttonsContainer: {
  },
  currentOutputsContainer: {
    backgroundColor: 'red',
  },
  industryAverageContainer: {
    backgroundColor: 'red',
    gridColumnStart: 1,
    gridColumnEnd: 4,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-around',
  }
};
