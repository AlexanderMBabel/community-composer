import React from 'react';

import TransportControl from './components/TransportControl';
import Melody from './components/Melody';
import Beat from './components/Beat';
import Bass from './components/Bass';
import Chords from './components/Chords';
function App() {
  return (
    <div className=" theme-bg-dark-blue font-lato">
      <TransportControl />
      <Melody />
      <Beat />
      <Bass />
      <Chords />
    </div>
  );
}

export default App;
