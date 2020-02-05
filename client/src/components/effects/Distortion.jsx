import React, { useState, useEffect } from 'react';
import { Distortion as DistortionTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';
import Select from 'react-select';

const oversampleOptions = [
  { value: 'none', label: 'none' },
  { value: '2x', label: '2x' },
  { value: '4x', label: '4x' }
];

const Distortion = ({ setAudioEffect }) => {
  const [distortion, setDistortion] = useState(0.4);
  const [oversample, setOversample] = useState('none');

  let settings = {
    distortion: distortion,
    oversample: oversample
  };

  let distortionEffect = new DistortionTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(distortionEffect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distortion, setAudioEffect, oversample]);

  return (
    <div className="border-4 shadow-inner theme-bg-yellow flex">
      <div id="Distortion">
        <Knob
          className="w-7 h-7 m-2"
          name="Distortion"
          onChange={val => {
            setDistortion(val);
          }}
          skin={s10}
          min={0}
          max={1}
        />
        <p className="text-xs">{distortion.toFixed(2)}</p>
        <p>Distortion</p>
      </div>
      <div id="oversample" className="w-full">
        <p>Oversample</p>
        <Select options={oversampleOptions} defaultValue={oversampleOptions[0]} onChange={val => setOversample(val.value)} />
      </div>
    </div>
  );
};

export default Distortion;
