import React, { useState, useEffect } from 'react';
import { FMSynth } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s8 } from 'react-rotary-knob-skin-pack';
import { connect } from 'react-redux';
import InstrumentContainer from '../Display/InstrumentContainer';
import PropTypes from 'prop-types';
import Select from 'react-select';

const oscillatorOptions = [
  { value: 'sine', label: 'sine' },
  { value: 'triangle', label: 'triangle' },
  { value: 'sawtooth', label: 'saw' },
  { value: 'square', label: 'square' },
  { value: 'pwm', label: 'pwm' }
];

const FrequencyModSynth = ({}) => {
  //Display State (min,reg,full)
  const [display, setDisplay] = useState('min');

  // Synth Tweek State
  const [harmonicity, setHarmonicity] = useState(3);
  const [modulationIndex, setModulationIndex] = useState(10);
  const [detune, setDetune] = useState(0);
  const [oscillator, setOscillator] = useState('sine');
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0.3);
  const [sustain, setSustain] = useState(1.5);
  const [release, setRelease] = useState(0.5);
  const [modulation, setModulation] = useState('square');
  const [modAttack, setModAttack] = useState(0.5);
  const [modDecay, setModDecay] = useState(0);
  const [modSustain, setModSustain] = useState(1);
  const [modRelease, setModRelease] = useState(0.5);

  const [volume, setVolume] = useState(0);
  let soundSettings = {
    harmonicity: harmonicity,
    modulationIndex: modulationIndex,
    detune: detune,
    oscillator: {
      type: oscillator
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release
    },
    modulation: {
      type: modulation
    },
    modulationEnvelope: {
      attack: modAttack,
      decay: modDecay,
      sustain: modSustain,
      release: modRelease
    }
  };

  return (
    <div>
      <InstrumentContainer />
    </div>
  );
};

FrequencyModSynth.propTypes = {};
export default connect(null, {})(FrequencyModSynth);
