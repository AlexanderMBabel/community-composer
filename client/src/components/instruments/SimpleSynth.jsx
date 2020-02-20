import React, { useState, useEffect } from 'react';
import { Synth } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s4 } from 'react-rotary-knob-skin-pack';
import { oscillatorOptions } from '../../utils/selectOptions';

import Select from 'react-select';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SimpleSynth = ({ section, melodyInstrument, bassInstrument }) => {
  const [osc, setOsc] = useState('triangle');
  const [envAttack, setEnvAttack] = useState(0);
  const [envDecay, setEnvDecay] = useState(0.1);
  const [envSustain, setEnvSustain] = useState(0.3);
  const [envRelease, setEnvRelease] = useState(1);
  const [volume, setVolume] = useState(0);
  const [detune, setDetune] = useState(0);

  const synthOptions = {
    oscillator: {
      type: osc
    },
    envelope: {
      attack: envAttack,
      release: envRelease,
      sustain: envSustain,
      decay: envDecay
    }
  };

  // initiate Tone Synth instance with options

  let simple = new Synth(synthOptions).toMaster();
  simple.volume.value = volume;
  simple.detune.value = detune;

  useEffect(() => {}, [osc, envAttack, envDecay, envSustain, envRelease, volume]);
  return (
    <div className="theme-bg-maroon">
      <div className="flex flex-col items-center rounded shadow-inner relative   border-4">
        <div className="">
          <p>Choose Oscillator</p>
          <div id="oscillator-select">
            <Select
              options={oscillatorOptions}
              onChange={val => {
                setOsc(val.value);
              }}
            />
          </div>
          <div className="shadow-md">
            <div id="volume">
              <Knob
                className="w-7 h-7 m-2"
                onChange={val => {
                  setVolume(val);
                }}
                value={volume}
                skin={s4}
                min={-50}
                max={10}
                rotateDegrees={180}
              />
              <p className="text-xs">{volume.toFixed(2)}</p>
              <p>volume</p>
            </div>
            <div id="detune">
              <Knob
                className="w-7 h-7 m-2"
                onChange={val => {
                  setDetune(val);
                }}
                value={detune}
                skin={s4}
                min={-99}
                max={99}
                rotateDegrees={180}
              />
              <p className="text-xs">{detune.toFixed(2)}</p>
              <p>Detune</p>
            </div>
          </div>
          <div id="envelope" className="border p-5 flex">
            <div>
              <Knob
                className="w-5 h-5 m-2"
                onChange={val => {
                  setEnvAttack(val);
                }}
                value={envAttack}
                skin={s4}
                min={0}
                max={0.5}
                step={0.01}
                unlockDistance={0}
              />
              <p>Attack</p>
            </div>
            <div>
              <Knob
                className="w-5 h-5  m-2"
                onChange={val => {
                  setEnvRelease(val);
                }}
                value={envRelease}
                skin={s4}
                min={1}
                max={15}
                step={0.1}
                unlockDistance={0}
              />
              <p>Release</p>
            </div>
            <div>
              <Knob
                className="w-5 h-5 m-2"
                onChange={val => {
                  setEnvSustain(val);
                }}
                value={envSustain}
                skin={s4}
                min={0}
                max={3}
                step={0.1}
                unlockDistance={0}
              />
              <p>Sustain</p>
            </div>
            <div>
              <Knob
                className="w-5 h-5 m-2"
                onChange={val => {
                  setEnvDecay(val);
                }}
                value={envDecay}
                skin={s4}
                min={0}
                max={1}
                step={0.1}
                unlockDistance={0}
              />
              <p>Decay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SimpleSynth.propTypes = {};

export default connect(null, {})(SimpleSynth);
