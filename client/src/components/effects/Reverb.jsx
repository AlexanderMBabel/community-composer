import React, { useState, useEffect } from 'react';
import { Reverb as ReverbTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';

const Reverb = ({ setAudioEffect }) => {
  const [decay, setDecay] = useState(1.5);
  const [preDelay, setPreDelay] = useState(0.01);

  let settings = {
    decay: decay,
    preDelay: preDelay
  };

  let distortionEffect = new ReverbTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(distortionEffect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decay, setAudioEffect, preDelay]);

  return (
    <div className="border-4 shadow-inner theme-bg-light-blue flex">
      <div id="Decay">
        <Knob
          className="w-7 h-7 m-2"
          name="Decay"
          onChange={val => {
            setDecay(val);
          }}
          skin={s10}
          min={0}
          max={5}
        />
        <p className="text-xs">{decay.toFixed(2)}</p>
        <p>Decay</p>
      </div>
      <div id="Delay">
        <Knob
          className="w-7 h-7 m-2"
          name="Delay"
          onChange={val => {
            setPreDelay(val);
          }}
          skin={s10}
          min={0}
          max={5}
        />
        <p className="text-xs">{preDelay.toFixed(2)}</p>
        <p>Delay</p>
      </div>
    </div>
  );
};

export default Reverb;
