import React, { useState, useEffect } from 'react';
import { Chorus as ChorusTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';
import Select from 'react-select';
import { oscillatorOptions } from '../../utils/selectOptions';

const Chorus = ({ setAudioEffect }) => {
  const [frequency, setFrequency] = useState(1.5);
  const [delayTime, setDelayTime] = useState(3.5);
  const [depth, setDepth] = useState(0.7);
  const [type, setType] = useState('sine');
  const [spread, setSpread] = useState(180);

  let settings = {
    frequency: frequency,
    delayTime: delayTime,
    depth: depth,
    type: type,
    spread: spread
  };

  let chorusEffect = new ChorusTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(chorusEffect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frequency, setAudioEffect, delayTime, depth, type, spread]);

  return (
    <div className="border-4 shadow-inner theme-bg-yellow flex">
      <div id="Frequency" className="text-center">
        <Knob
          className="w-7 h-7 m-2"
          name="Frequency"
          onChange={val => {
            setFrequency(val);
          }}
          skin={s10}
          min={0}
          max={10}
        />
        <p className="text-xs">{frequency.toFixed(2)}</p>
        <p>Frequency</p>
      </div>
      <div id="Delay" className="text-center">
        <Knob
          className="w-7 h-7 m-2"
          name="Delay"
          onChange={val => {
            setDelayTime(val);
          }}
          skin={s10}
          min={0}
          max={10}
        />
        <p className="text-xs">{delayTime.toFixed(2)}</p>
        <p>Delay</p>
      </div>
      <div id="Depth" className="text-center">
        <Knob
          className="w-7 h-7 m-2"
          name="Depth"
          onChange={val => {
            setDepth(val);
          }}
          skin={s10}
          min={0}
          max={4}
        />
        <p className="text-xs">{depth.toFixed(2)}</p>
        <p>Depth</p>
      </div>
      <div id="Spread" className="text-center">
        <Knob
          className="w-7 h-7 m-2"
          name="Spread"
          onChange={val => {
            setSpread(val);
          }}
          skin={s10}
          min={0}
          max={1}
        />
        <p className="text-xs">{spread.toFixed(2)}</p>
        <p>Spread</p>
      </div>
      <div id="oversample" className="w-full">
        <p>LFO Type</p>
        <Select options={oscillatorOptions} defaultValue={oscillatorOptions[0]} onChange={val => setType(val.value)} />
      </div>
    </div>
  );
};

export default Chorus;
