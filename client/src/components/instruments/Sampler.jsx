import React from 'react';
import * as Tone from 'tone';
// import {} from '../../sounds/drums/KICKS/'
import { Select } from 'react-select';
import { connect } from 'react-redux';
import { beatInstrument } from '../../actions/instruments';
import PropTypes from 'prop-types';

const Sampler = ({ beatInstrument }) => {
  // let buffer = new Tone.Buffer('../../sounds/drums/KICKS/broke.wav')
  // create sampler
  let samplerInst = new Tone.Sampler({
    B3: 'https://freewavesamples.com/files/Bass-Drum-1.wav',
    Bb3: 'https://freewavesamples.com/files/Ensoniq-ESQ-1-Snare-2.wav',
    A3: 'https://freewavesamples.com/files/Ensoniq-SQ-1-Side-Stick.wav',
    'G#3': 'https://freewavesamples.com/files/Ensoniq-SQ-1-Open-Hi-Hat.wav',
    G3: 'https://freewavesamples.com/files/Kawai-K1r-Closed-Hi-Hat.wav',
    'F#3': 'https://freewavesamples.com/files/Crash-Cymbal-1.wav'
  }).toMaster();

  beatInstrument(samplerInst);

  // Tone.Buffer.on('load', () => {
  //   console.log('buffer loaded');
  // });
  const test = () => {
    samplerInst.triggerAttackRelease('C3', '8n', 0);
  };

  const snare = () => {
    samplerInst.triggerAttackRelease('C#3', '0.3', 0);
  };
  return (
    <div>
      <div className="border shadow-md flex flex-row">
        <button className="btn" onClick={test}>
          test
        </button>
        <button onCLick={snare}>snare</button>
        <div className="border flex flex-col">
          <p>Kick</p>
          <div>Attack</div>
          <div>Release</div>
        </div>
      </div>
    </div>
  );
};

Sampler.protoTypes = {
  beatInstrument: PropTypes.func.isRequired
};

export default connect(null, { beatInstrument })(Sampler);
