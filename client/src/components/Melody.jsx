import React, { useState } from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import ChooseInstrument from './ChooseInstrument';
import Instrument from './Instrument';

// import PropTypes from 'prop-types';

const Melody = () => {
  const [instrument, setInstrument] = useState(null);

  return (
    <div className="theme-bg-dark-blue flex flex-wrap items-center justify-center flex-col">
      <p className="font-bangers text-4xl ">Melody</p>

      <Instrument section="melody" setInstrument={setInstrument} />
      <PianoRoll instrument={instrument} section="melody" />
    </div>
  );
};

export default Melody;
