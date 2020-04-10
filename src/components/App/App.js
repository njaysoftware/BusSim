import React from 'react';
import './App.css';
import AppBar from '../AppBar/index';
import Application from '../Application/index';
function App() {
  return (
    <div className="App">
      <AppBar title={'Introductory Business Simulation'}/>
      <Application/>
    </div>
  );
}
export default App;
