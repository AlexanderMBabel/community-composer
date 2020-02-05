import React, { useState, useEffect } from 'react';
import { BitCrusher as BitCrusherTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';

const BitCrusher = ({ setAudioEffect }) => {
  const [bits, setBits] = useState(4);

  let settings = {
    bits: bits
  };

  let bitCrusher = new BitCrusherTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(bitCrusher);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bits, setAudioEffect]);

  return (
    <div className="theme-bg-dark-tan border-4 shadow-inner">
      <div id="bits" className="text-center">
        <Knob
          className="w-7 h-7 m-2"
          name="bits"
          onChange={val => {
            setBits(val);
          }}
          skin={s10}
          min={1}
          max={32}
        />
        <p className="text-xs">{bits.toFixed(2)}</p>
        <p>bits</p>
      </div>
    </div>
  );
};

export default BitCrusher;
