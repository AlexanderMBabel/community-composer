import React from 'react';
import * as Tone from 'tone';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const synth = new Tone.PolySynth(4, Tone.DuoSynth, { voice0: { oscillator: { type: 'square' }, portamento: 3 } }).toMaster();

const PolySynth = ({}) => {
  return <div></div>;
};

PolySynth.prototype = {};

export default connect(null, {})(PolySynth);
