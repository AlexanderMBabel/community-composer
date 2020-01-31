import React, { useState } from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import ChooseInstrument from './ChooseInstrument';
import Instrument from './Instrument';

// import PropTypes from 'prop-types';

const Melody = () => {
  const [instrument, setInstrument] = useState(null);

  return (
    <div className=" flex flex-wrap items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center mt-10 mb-10 theme-bg-light-tan">
        <p className="font-bangers text-4xl   ">Melody</p>
      </div>

      <Instrument section="melody" setInstrument={setInstrument} />
      <PianoRoll instrument={instrument} section="melody" />
    </div>
  );
};

export default Melody;
