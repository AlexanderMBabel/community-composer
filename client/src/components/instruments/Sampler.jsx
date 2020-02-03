import React from 'react';
import * as Tone from 'tone';
// import {} from '../../sounds/drums/KICKS/'
import Select from 'react-select';
import { connect } from 'react-redux';
import { beatInstrument } from '../../actions/instruments';
import PropTypes from 'prop-types';
import { Knob } from 'react-rotary-knob';
import { s7 } from 'react-rotary-knob-skin-pack';

import kick from '../../beats/kickBroke.wav';
import snareDrum from '../../beats/snareDrip.wav';
import clap from '../../beats/claspSleep.wav';
import hhClosed from '../../beats/hatsClosedCyber.wav';
import hhopen from '../../beats/hatsopenFriends.wav';
import snap from '../../beats/snapWater.wav';
import percA from '../../beats/percAwar.wav';
import percB from '../../beats/percSeek.wav';
// import kick from '../../beats/kickBroke.wav'

const Sampler = ({ beatInstrument }) => {
  // let buffer = new Tone.Buffer('../../sounds/drums/KICKS/broke.wav')
  // create sampler
  let samplerInst = new Tone.Sampler({
    B4: kick,
    Bb4: snareDrum,
    A4: clap,
    'G#4': hhClosed,
    G4: hhopen,
    'F#4': snap,
    F4: percA,
    E4: percB
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
