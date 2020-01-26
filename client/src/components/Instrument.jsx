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
  { value: 'saw', label: 'saw' }
];

const Instrument = ({ section }) => {
  const [instrumentType, setInstrumentType] = useState('Synth');
  const [osc, setOsc] = useState('triangle');
  const [envAttack, setEnvAttack] = useState(0);
  const [envDecay, setEnvDecay] = useState(0);
  const [envSustain, setEnvSustain] = useState(0);
  const [envRelease, setEnvRelease] = useState(1);

  //Synths ***TODO*** move to sperate function to load only synth selected
  let simple = new Tone.Synth({
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: envAttack,
      release: envRelease,
      sustain: envSustain
      //   decay: envDecay
    }
  }).toMaster();

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
            <Select options={oscOptions} onChange={val => setOsc(val)} />
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
                max={15}
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
