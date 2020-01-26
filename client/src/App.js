import React from 'react';
import PianoRoll from './components/PianoRoll/PianoRoll';
import TransportControl from './components/TransportControl';
import Melody from './components/Melody';

function App() {
  return (
    <div className=" bg-teal-100">
      <TransportControl />
      <Melody />
      <PianoRoll />
    </div>
  );
}

export default App;
