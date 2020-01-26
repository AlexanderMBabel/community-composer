import React from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import ChooseInstrument from './ChooseInstrument';
import Instrument from './Instrument';

const Melody = () => {
  return (
    <div className="bg-orange-600 flex flex-wrap items-center justify-center flex-col">
      <p className="font-bangers text-2xl ">Melody</p>

      <Instrument />
    </div>
  );
};

export default Melody;
