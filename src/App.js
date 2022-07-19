import React from 'react';
import ControlPanel from './components/ControlPanel';
import Engine from './components/Engine';
import Screen from './components/Screen';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
        <Score />
        <Screen />
        <Engine />
        <ControlPanel />        
    </div>
  );
}

export default App;
