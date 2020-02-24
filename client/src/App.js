import React from 'react';

import TransportControl from './components/TransportControl';

import SidePanel from './components/SidePanel/SidePanel';
import MainSequence from './components/MainSequence/MainSequence';
import EditPanel from './components/EditPanel/EditPanel';
function App() {
  return (
    <div className=" bg-gray-900 font-lato">
      <TransportControl />
      <div className="flex flex-wrap">
        <SidePanel />
        <MainSequence />
        <EditPanel />
      </div>
    </div>
  );
}

export default App;
