import React from 'react';
import * as Tone from 'tone';
import { connect } from 'react-redux';
import { chordInstrument } from '../../actions/instruments';
import PropTypes from 'prop-types';

const synth = new Tone.PolySynth(6, Tone.FMSynth).toMaster();

const test = () => {
  synth.triggerAttackRelease(['A3', 'E4', 'D5', 'A4'], '4n');
};

const PolySynth = ({ chordInstrument }) => {
  chordInstrument(synth);
  return (
    <div>
      <button onClick={test}>test</button>
    </div>
  );
};

PolySynth.prototype = {
  chordInstrument: PropTypes.func.isRequired
};

export default connect(null, { chordInstrument })(PolySynth);
