import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
// Knob
import { Knob } from 'react-rotary-knob';
import { s4 } from 'react-rotary-knob-skin-pack';

import Select from 'react-select';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const oscOptions = [
  { value: 'sine', label: 'sine' },
  { value: 'triangle', label: 'triangle' },
  { value: 'square', label: 'square' },
  { value: 'sawtooth', label: 'saw' },
  { value: 'pwm', label: 'pwm' }
];

const instOptions = [
  { value: 'Synth', label: 'Simple Synth' },
  { value: 'FMSynth', label: 'FM Synth' },
  { value: 'DouSynth', label: 'Dual Osc Synth' }
];

const Instrument = ({}) => {
  const [instrumentType, setInstrumentType] = useState('Synth');
  const [osc, setOsc] = useState('triangle');
  const [envAttack, setEnvAttack] = useState(0);
  const [envDecay, setEnvDecay] = useState(0);
  const [envSustain, setEnvSustain] = useState(0);
  const [envRelease, setEnvRelease] = useState(1);
  const [volume, setVolume] = useState(0);
  const [detune, setDetune] = useState(0);

  //Synths ***TODO*** move to sperate function to load only synth selected
  let simple = new Tone.Synth({
    oscillator: {
      type: osc
    },
    envelope: {
      attack: envAttack,
      release: envRelease,
      sustain: envSustain
      //   decay: envDecay
    }
  }).toMaster();

  let fmSynth = new Tone.FMSynth({
    harmonicity: 3,
    modulationIndex: 10,
    detune: 0,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0,
      decay: 0.3,
      sustain: 1.5,
      release: 0.5
    },
    modulation: {
      type: 'square'
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  }).toMaster();

  let duoSynth = new Tone.DuoSynth({
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: 'sine'
      },
      filterEnvelope: {
        attack: 0,
        decay: 0,
        sustain: 1.5,
        release: 1
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: 'square'
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0,
        decay: 0,
        sustain: 1.5,
        release: 0.9
      }
    }
  }).toMaster();

  const [currentInstrument, setCurrentInstrument] = useState(simple);

  useEffect(() => {}, [osc, envAttack, envDecay, envSustain, envRelease, volume]);

  simple.volume.value = volume;
  simple.detune.value = detune;

  const handleVolumeChange = val => {
    const maxDistance = 39;
    let distance = Math.abs(val - volume);
    if (distance > maxDistance) {
      return;
    } else {
      setVolume(val);
    }
  };

  const instrumentChanger = val => {
    switch (val.value) {
      case 'Synth':
        setCurrentInstrument(simple);

        break;
      case 'FMSynth':
        setCurrentInstrument(fmSynth);

        break;
      case 'DuoSynth':
        setCurrentInstrument(duoSynth);

        break;
      default:
        break;
    }
  };
  return (
    <div className="w-3/4">
      <div className="flex flex-col items-center rounded-lg shadow-lg relative  border-gray-900 border-4">
        <p>{instrumentType}</p>
        <div className="absolute top-0 right-0 w-1/5">
          <div>Choose Instrument</div>
          <Select options={instOptions} onChange={instrumentChanger} />
        </div>
        <div className="">
          <p>Choose Oscillator</p>
          <div id="oscillator-select">
            <Select
              options={oscOptions}
              onChange={val => {
                setOsc(val.value);
              }}
            />
          </div>
          <div className="shadow-md  theme-border-red p-4">
            <div id="volume">
              <Knob className="w-7 h-7 m-2" onChange={handleVolumeChange} value={volume} skin={s4} min={-50} max={10} rotateDegrees={180} />
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
          <div id="envelope" className="border theme-border-red shadow-md p-5 flex">
            <div>
              <Knob
                className="w-5 h-5 m-2"
                onChange={val => {
                  setEnvAttack(val);
                }}
                value={envAttack}
                skin={s4}
                min={0}
                max={2}
                step={0.1}
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
                max={25}
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

Instrument.protoTypes = {};

export default connect(null, {})(Instrument);
