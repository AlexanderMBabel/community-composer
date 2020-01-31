import React, { useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { chordGrid } from '../actions/grids';
import PropTypes from 'prop-types';
import chordProgressionGenerator, { generateScale, transposeScale } from '../utils/chordProgressionGenerator';

import PolySynth from './instruments/PolySynth';

const keyOptions = [
  { value: 0, label: 'A' },
  { value: 1, label: 'Bb' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
  { value: 4, label: 'C#' },
  { value: 5, label: 'D' },
  { value: 6, label: 'Eb' },
  { value: 7, label: 'E' },
  { value: 8, label: 'F' },
  { value: 9, label: 'F#' },
  { value: 10, label: 'G' },
  { value: 11, label: 'G#' }
];

const scaleOptions = [
  { value: [2, 2, 1, 2, 2, 2], label: 'Major' },
  { value: [2, 1, 2, 2, 1, 2], label: 'Minor' },
  { value: [2, 1, 2, 2, 2, 2], label: 'Melodic Minor' },
  { value: [2, 1, 2, 2, 1, 3], label: 'Harmonic Minor' },
  { value: [2, 1, 2, 1, 2, 1], label: 'Dimished' },
  { value: [2, 1, 3, 1, 1, 3], label: 'Hungarian Minor' },
  { value: [1, 3, 1, 1, 2, 3], label: 'Persian' },
  { value: [2, 2, 1, 1, 2, 2], label: 'Arabian' }
];

const progressionOptions = [
  { value: [0, 3, 4], label: 'I IV V' },
  { value: [0, 1, 4], label: 'I II V' },
  { value: [0, 5, 1, 4], label: 'I VI II V' },
  { value: [0, 2, 6, 1, 5], label: 'I III VI II V' },
  { value: [0, 3, 4], label: 'I7 IV7 V7' }
];

const styleOptions = [{ value: [0, 'space', 0, 0, 1, 'space', 1, 'space', 2, 2, 'space', 1], label: 'basic' }];
const Chords = ({ chordGrid }) => {
  const [key, setKey] = useState(0);
  const [scale, setScale] = useState([2, 2, 1, 2, 2, 2]);
  const [progression, setProgression] = useState([0, 3, 4]);
  const [style, setStyles] = useState([0, 'space', 0, 0, 1, 'space', 1, 'space', 2, 2, 'space', 1]);

  let chordProgression = chordProgressionGenerator(scale, key, progression, style);
  chordGrid(chordProgression);

  return (
    <div>
      <section className=" flex flex-wrap items-center justify-center flex-col">
        <div className="font-bangers text-4xl font-bold">Chord Progression</div>
        <PolySynth />
        <section className="flex flex-wrap w-full items-center justify-center">
          <div className="w-1/6">
            <p>Key</p>
            <Select className="w-full" options={keyOptions} onChange={val => setKey(val.value)} defaultValue={keyOptions[0]} />
          </div>
          <div className="w-1/6">
            <p>Scale</p>
            <Select className="w-full" options={scaleOptions} onChange={val => setScale(val.value)} defaultValue={scaleOptions[0]} />
          </div>
          <div className="w-1/6">
            <p>Progression</p>
            <Select className="w-full" options={progressionOptions} onChange={val => setProgression(val.value)} defaultValue={progressionOptions[0]} />
          </div>
        </section>
      </section>
    </div>
  );
};

Chords.prototype = {
  chordGrid: PropTypes.func.isRequired
};

export default connect(null, { chordGrid })(Chords);
