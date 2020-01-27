import React, { useState } from 'react';
import * as Tone from 'tone';
// Knob
import { Knob } from 'react-rotary-knob';
import { s4 } from 'react-rotary-knob-skin-pack';
import ChooseInstrument from './ChooseInstrument';
import Select from 'react-select';
import PianoRoll from './PianoRoll/PianoRoll';

const oscOptions = [
  { value: 'sine', label: 'sine' },
  { value: 'triangle', label: 'triangle' },
  { value: 'square', label: 'square' },
  { value: 'sawtooth', label: 'saw' },
  { value: 'pwm', label: 'pwm' }
];

const Instrument = ({ section }) => {
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

  simple.volume.value = volume;

  const handleVolumeChange = val => {
    const maxDistance = 39;
    let distance = Math.abs(val - volume);
    if (distance > maxDistance) {
      return;
    } else {
      setVolume(val);
    }
  };

  //   function changeAttack(val) {
  //     setEnvAttack(val);
  //   }
  return (
    <div>
      <div className="flex flex-col">
        <p>{instrumentType}</p>
        <div className="">
          <ChooseInstrument setInstrumentType={setInstrumentType} />
          <div id="oscillator-select">
            <Select options={oscOptions} onChange={val => setOsc(val.value)} />
          </div>
          <div className="shadow-md border p-4">
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
          <div id="envelope" className="border shadow-md p-5 flex">
            <div>
              <Knob
                className="w-5 h-5 m-2"
                onChange={val => {
                  setEnvAttack(val);
                }}
                value={envAttack}
                skin={s4}
                min={0}
                max={5}
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
                max={20}
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
      <PianoRoll synth={simple} />
    </div>
  );
};

export default Instrument;
