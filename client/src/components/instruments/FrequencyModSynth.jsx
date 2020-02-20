import React, { useState, useEffect } from 'react';
import { FMSynth } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s8 } from 'react-rotary-knob-skin-pack';
import { connect } from 'react-redux';

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

  let fmSynth = new FMSynth(soundSettings).toMaster();
  useEffect(() => {}, [fmSynth, soundSettings, volume]);

  console.log(soundSettings);

  return (
    <div>
      <div className="theme-bg-light-blue rounded-lg border-4 shadow-inner flex flex-wrap">
        <div className="text-center w-full">FM Synth</div>
        <div className="m-10">
          <p>Source Sound</p>
          <div id="harmonicity">
            <Knob
              className="w-7 h-7 m-2"
              name="harmonicity"
              onChange={val => {
                setHarmonicity(val);
              }}
              skin={s8}
              min={0}
              max={4}
            />
            <p className="text-xs">{harmonicity.toFixed(2)}</p>
            <p>harmonicity</p>
          </div>
          <div id="modulation-index">
            <Knob
              className="w-7 h-7 m-2"
              name="modulationIndex"
              onChange={val => {
                setModulationIndex(val);
              }}
              value={modulationIndex}
              skin={s8}
              min={0}
              max={50}
            />
            <p className="text-xs">{modulationIndex.toFixed(2)}</p>
            <p>Mod Index</p>
          </div>
          <div id="detune">
            <Knob
              className="w-7 h-7 m-2"
              name="detune"
              onChange={val => {
                setDetune(val);
              }}
              value={detune}
              skin={s8}
              min={-99}
              max={99}
              rotateDegrees={180}
            />
            <p className="text-xs">{detune.toFixed(2)}</p>
            <p>detune</p>
          </div>
          <div id="volume">
            <Knob className="w-7 h-7 m-2" name="volume" onChange={val => setVolume(val)} value={volume} skin={s8} min={-50} max={10} rotateDegrees={180} />
            <p className="text-xs">{volume.toFixed(2)}</p>
            <p>volume</p>
          </div>
          <div id="source-oscillator">
            <Select options={oscillatorOptions} defaultValue={oscillatorOptions[0]} onChange={val => setOscillator(val.value)} />
          </div>
        </div>
        <div className="m-10">
          <p>Envelope</p>
          <div id="attack">
            <Knob
              className="w-7 h-7 m-2"
              name="attack"
              onChange={val => {
                setModAttack(val);
              }}
              value={attack}
              skin={s8}
              min={0}
              max={1}
              steps={0.1}
            />
            <p className="text-xs">{attack.toFixed(2)}</p>
            <p>attack</p>
          </div>
          <div id="decay">
            <Knob
              className="w-7 h-7 m-2"
              name="decay"
              onChange={val => {
                setDecay(val);
              }}
              value={decay}
              skin={s8}
              min={0}
              max={2}
              steps={0.1}
            />
            <p className="text-xs">{decay.toFixed(2)}</p>
            <p>decay</p>
          </div>
          <div id="sustain">
            <Knob
              className="w-7 h-7 m-2"
              name="sustain"
              onChange={val => {
                setSustain(val);
              }}
              value={sustain}
              skin={s8}
              min={0}
              max={3}
              steps={0.1}
            />
            <p className="text-xs">{sustain.toFixed(2)}</p>
            <p>sustain</p>
          </div>
          <div id="release">
            <Knob
              className="w-7 h-7 m-2"
              name="release"
              onChange={val => {
                setRelease(val);
              }}
              value={release}
              skin={s8}
              min={0}
              max={3}
              steps={0.1}
            />
            <p className="text-xs">{release.toFixed(2)}</p>
            <p>release</p>
          </div>
        </div>
        <div className="m-10">
          <p>Modulator</p>
          <div>
            <p>Mod Osc</p>
            <Select
              options={oscillatorOptions}
              defaultValue={oscillatorOptions[0]}
              onChange={val => {
                setModulation(val.value);
              }}
            />
          </div>
          <div id="modAttack">
            <Knob
              className="w-7 h-7 m-2"
              name="modAttack"
              onChange={val => {
                setModAttack(val);
              }}
              value={modAttack}
              skin={s8}
              min={0}
              max={1}
              steps={0.1}
            />
            <p className="text-xs">{modAttack.toFixed(2)}</p>
            <p>modAttack</p>
          </div>
          <div id="modDecay">
            <Knob
              className="w-7 h-7 m-2"
              name="modDecay"
              onChange={val => {
                setModDecay(val);
              }}
              value={modDecay}
              skin={s8}
              min={0}
              max={10}
              steps={0.1}
            />
            <p className="text-xs">{modDecay.toFixed(2)}</p>
            <p>modDecay</p>
          </div>
          <div id="modSustain">
            <Knob
              className="w-7 h-7 m-2"
              name="modSustain"
              onChange={val => {
                setModSustain(val);
              }}
              value={modSustain}
              skin={s8}
              min={0}
              max={3}
              steps={0.1}
            />
            <p className="text-xs">{modSustain.toFixed(2)}</p>
            <p>modSustain</p>
          </div>
          <div id="modRelease">
            <Knob
              className="w-7 h-7 m-2"
              name="modRelease"
              onChange={val => {
                setModRelease(val);
              }}
              value={modRelease}
              skin={s8}
              min={0}
              max={3}
              steps={0.1}
            />
            <p className="text-xs">{modRelease.toFixed(2)}</p>
            <p>modRelease</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrequencyModSynth.propTypes = {};
export default connect(null, {})(FrequencyModSynth);
