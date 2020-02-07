import React from 'react';
import * as Tone from 'tone';
import { connect } from 'react-redux';
import { chordInstrument } from '../../actions/instruments';
import PropTypes from 'prop-types';

const synth = new Tone.PolySynth(4, Tone.DuoSynth, { voice0: { oscillator: { type: 'square' }, portamento: 3 } }).toMaster();

const PolySynth = ({ chordInstrument }) => {
  chordInstrument(synth);
  return <div></div>;
};

PolySynth.prototype = {
  chordInstrument: PropTypes.func.isRequired
};

export default connect(null, { chordInstrument })(PolySynth);
