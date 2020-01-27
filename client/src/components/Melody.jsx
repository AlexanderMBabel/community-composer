import React, { useState } from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import ChooseInstrument from './ChooseInstrument';
import Instrument from './Instrument';

// import PropTypes from 'prop-types';

const Melody = () => {
  const [instrument, setInstrument] = useState(null);

  return (
    <div className="bg-orange-600 flex flex-wrap items-center justify-center flex-col">
      <p className="font-bangers text-2xl ">Melody</p>

      <Instrument setInstrument={setInstrument} />
      <PianoRoll instrument={instrument} />
    </div>
  );
};

export default Melody;
