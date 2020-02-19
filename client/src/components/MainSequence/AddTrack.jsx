import React, { useState } from 'react';
import Select from 'react-select';
import ColorPicker from '../ColorPicker/ColorPicker';
import { connect } from 'react-redux';
import { addTrackAction } from '../../actions/tracks';
import PropTypes from 'prop-types';

const trackTypes = [
  { value: 'instrument', label: 'MIDI instrument' },
  { value: 'chord', label: 'chord constructor' },
  { value: 'beats', label: 'drums' },
  { value: 'audio', label: 'audio' }
];

const AddTrack = ({ addTrackAction, setDisplayAdd }) => {
  const [color, setColor] = useState('bg-gray-300');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [errors, setErrors] = useState([]);

  const validate = () => {
    let isValid = true;
    setErrors([]);
    if (name === '') {
      setErrors([...errors, 'please enter a name']);
      isValid = false;
    }
    if (type === '') {
      setErrors([...errors, 'please choose a type']);
      isValid = false;
    }
    return isValid;
  };

  const addTrack = () => {
    if (validate()) {
      addTrackAction({ name, type, color, effects: [], clips: [], instrument: null, numberOfClips: 0 });
      setDisplayAdd(false);
      setName('');
      setType(false);
      setColor('');
    }
  };
  console.log(errors);
  return (
    <div className=" bg-gray-900 h-full">
      <Select options={trackTypes} placeholder="Track Type..." onChange={val => setType(val.value)} />
      <div className="flex flex-wrap justify-center items-center">
        <input className="w-3/4 mt-4 p-2" placeholder="Track name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <div>
          <ColorPicker setColor={setColor} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={addTrack} className="btn">
          Add track
        </button>
      </div>
      <div id="errors">
        {errors.map(error => (
          <div className="bg-red-300">{error}</div>
        ))}
      </div>
    </div>
  );
};

AddTrack.propTypes = {
  addTrackAction: PropTypes.func.isRequired
};

export default connect(null, { addTrackAction })(AddTrack);
