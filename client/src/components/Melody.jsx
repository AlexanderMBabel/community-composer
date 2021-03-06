import React, { useState } from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import ChooseInstrument from './ChooseInstrument';
import Instrument from './Instrument';
import VelocitySliders from './VelocitySliders';
import FrequencyModSynth from './instruments/FrequencyModSynth';
import Effects from './effects/Effects';
import Effect from './effects/Effect';

// import PropTypes from 'prop-types';

const Melody = () => {
  return (
    <div className=" flex flex-wrap items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center mt-10 mb-10 theme-bg-light-tan">
        <p className="font-lato text-3xl   ">Melody</p>
      </div>

      <FrequencyModSynth section="melody" />
      <Effects section="melody" />
      <PianoRoll section="melody" />
      <VelocitySliders section="melody" />
    </div>
  );
};

export default Melody;
