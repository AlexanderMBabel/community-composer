import React, { useState } from 'react';
import Select from 'react-select';
import ColorPicker from '../ColorPicker/ColorPicker';

const trackTypes = [
  { value: 'instrument', label: 'MIDI instrument' },
  { value: 'chord', label: 'chord constructor' },
  { value: 'beats', label: 'drums' },
  { value: 'audio', label: 'audio' }
];

const AddTrack = () => {
  const [choosenColor, setChoosenColor] = useState('bg-gray-300');
  return (
    <div className="absolute top-0 bg-gray-900">
      <Select options={trackTypes} defaultValue={trackTypes[0]} />
      <div>
        <p>Name</p>
        <input type="text" />
      </div>
      <div>
        <p>Color</p>
        <div>
          <ColorPicker setChoosenColor={setChoosenColor} />
        </div>
      </div>
    </div>
  );
};

export default AddTrack;
