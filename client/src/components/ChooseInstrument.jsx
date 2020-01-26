import React from 'react';

// Drop Down ***TODO*** Create Custom
import Dropdown from 'react-dropdown';

// Icons
import { MdViewWeek } from 'react-icons/md';

const ChooseInstrument = ({ setInstrumentType }) => {
  const options = [
    { value: 'Synth', label: 'Simple' },
    { value: 'AMSynth', label: 'Amp Mod Synth' },
    { value: 'DuoSynth', label: 'Vibrato Synth' },
    { value: 'FMSynth', label: 'Frequency Mod Synth' }
  ];
  return (
    <div>
      <Dropdown
        options={options}
        placeholder={<MdViewWeek />}
        onChange={e => {
          setInstrumentType(e.value);
        }}
      />
    </div>
  );
};

export default ChooseInstrument;
