import React, { useState, useEffect } from 'react';
import { AutoFilter as AutoFilterTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';
import Select from 'react-select';
import { oscillatorOptions } from '../../utils/selectOptions';

const AutoFilter = ({ setAudioEffect }) => {
  const [frequency, setFrequency] = useState(1);
  const [type, setType] = useState('sine');
  const [depth, setDepth] = useState(1);
  const [baseFrequency, setBaseFrequency] = useState(200);
  const [octaves, setOctaves] = useState(2.6);
  const [filterType, setFilterType] = useState('lowpass');
  const [rolloff, setRolloff] = useState(-12);
  const [q, setQ] = useState(1);

  let settings = {
    frequency: frequency,
    type: type,
    depth: depth,
    baseFrequency: baseFrequency,
    octaves: octaves,
    filter: {
      type: filterType,
      rolloff: rolloff,
      Q: q
    }
  };

  let autoFilter = new AutoFilterTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(autoFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frequency, type, depth, baseFrequency, octaves, filterType, rolloff, q, setAudioEffect]);

  return (
    <div className="theme-bg-maroon border-4 shadow-inner">
      <div>
        <Select options={oscillatorOptions} defaultValue={oscillatorOptions[0]} onChange={val => setType(val.value)} />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex">
          <div id="frequency" className="text-center">
            <Knob
              className="w-7 h-7 m-4"
              name="frequency"
              onChange={val => {
                setFrequency(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-xs text-center">{frequency.toFixed(2)}</p>
            <p className="text-center">Frequency</p>
          </div>

          <div id="depth">
            <Knob
              className="w-7 h-7 m-4"
              name="depth"
              onChange={val => {
                setDepth(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-xs text-center">{depth.toFixed(2)}</p>
            <p className="text-center">depth</p>
          </div>
          <div id="base-frequency">
            <Knob
              className="w-7 h-7 m-4"
              name="baseFrequency"
              onChange={val => {
                setBaseFrequency(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-xs text-center">{baseFrequency.toFixed(2)}</p>
            <p className="text-center">Base</p>
          </div>
        </div>

        <div className="flex">
          <div id="octaves">
            <Knob
              className="w-7 h-7 m-4"
              name="octaves"
              onChange={val => {
                setOctaves(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-center text-xs">{octaves.toFixed(2)}</p>
            <p className="text-center">Octaves</p>
          </div>
          <div id="rolloff">
            <Knob
              className="w-7 h-7 m-4"
              name="rolloff"
              onChange={val => {
                setRolloff(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-xs text-center">{rolloff.toFixed(2)}</p>
            <p className="text-center">Rolloff</p>
          </div>
          <div id="q">
            <Knob
              className="w-7 h-7 m-4"
              name="q"
              onChange={val => {
                setQ(val);
              }}
              skin={s10}
              min={0}
              max={4}
            />
            <p className="text-xs text-center">{q.toFixed(2)}</p>
            <p className="text-center">Q</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoFilter;
