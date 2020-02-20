import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
// import {} from '../../sounds/drums/KICKS/'
import Select from 'react-select';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Knob } from 'react-rotary-knob';
import { s7 } from 'react-rotary-knob-skin-pack';

import { customStyles } from '../../styles/react-select-custom';
import DropdownIndicator from '../../react-select-customs/DropdownIndicator';
import { drumSets } from '../../utils/selectOptions';
import { FaDrumSteelpan } from 'react-icons/fa';

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
  const [volume, setVolume] = useState(0);
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

  useEffect(() => {
    samplerInst.volume.value = volume;
  }, [volume]);

  return (
    <div>
      <div className="border shadow-md flex flex-row">
        <div className="border p-6 shadow-inner flex flex-col">
          <div>
            <p>Sound Preset</p>
            <Select placeholder={<FaDrumSteelpan />} options={drumSets} styles={customStyles} />
          </div>
          <div className="">
            <Knob skin={s7} onChange={val => setVolume(val)} min={-40} max={20} unlockDistance={20} step={1} value={volume} />
            <p>Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Sampler.protoTypes = {};

export default connect(null, {})(Sampler);
