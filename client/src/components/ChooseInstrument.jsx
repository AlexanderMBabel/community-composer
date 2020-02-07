import React, { useState } from 'react';

import { instrumentOptions } from '../utils/selectOptions';
import FrequencyModSynth from './instruments/FrequencyModSynth';
import PluckSynth from './instruments/PluckSynth';
import SimpleSynth from './instruments/SimpleSynth';
import Select from 'react-select';

const ChooseInstrument = ({ section }) => {
  const [instrument, setInstrument] = useState(null);
  const showSelected = () => {
    switch (instrument) {
      case 'FMSynth':
        return <FrequencyModSynth section={section} />;
      case 'PluckSynth':
        return <PluckSynth section={section} />;
      default:
        return <SimpleSynth section={section} />;
    }
  };
  return (
    <div>
      <Select
        options={instrumentOptions}
        defaultValue={instrumentOptions[0]}
        onChange={val => {
          setInstrument(val.value);
        }}
      />
      {showSelected()}
    </div>
  );
};

export default ChooseInstrument;
