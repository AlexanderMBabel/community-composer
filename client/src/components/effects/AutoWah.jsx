import React, { useState, useEffect } from 'react';
import { AutoWah as AutoWahTone } from 'tone';
import { Knob } from 'react-rotary-knob';
import { s10, s8 } from 'react-rotary-knob-skin-pack';

const AutoWah = ({ setAudioEffect }) => {
  const [baseFrequency, setBaseFrequency] = useState(200);
  const [octaves, setOctaves] = useState(2.6);
  const [sensitivity, setSensitivity] = useState(0);

  const [q, setQ] = useState(2);
  const [gain, setGain] = useState(2);
  const [attack, setAttack] = useState(0.3);
  const [release, setRelease] = useState(0.5);

  let settings = {
    baseFrequency: baseFrequency,
    octaves: octaves,
    sensitivity: sensitivity,
    Q: q,
    gain: gain,
    follower: {
      attack: attack,
      release: release
    }
  };

  let autoWah = new AutoWahTone({ settings }).toMaster();
  useEffect(() => {
    setAudioEffect(autoWah);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensitivity, baseFrequency, octaves, gain, attack, release, q, setAudioEffect]);

  return (
    <div className="theme-bg-faded-red border-4 rounded-md shadow-inner">
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-row">
          <div id="baseFrequency">
            <Knob
              className="w-7 h-7 m-4"
              name="baseFrequency"
              onChange={val => {
                setBaseFrequency(val);
              }}
              skin={s10}
              min={0}
              max={4000}
            />
            <p className="text-xs text-center">{baseFrequency.toFixed(2)}</p>
            <p className="text-center">Frequency</p>
          </div>

          <div id="octaves">
            <Knob
              className="w-7 h-7 m-4"
              name="octaves"
              onChange={val => {
                setOctaves(val);
              }}
              skin={s10}
              min={0}
              max={10}
            />
            <p className="text-xs text-center">{octaves.toFixed(2)}</p>
            <p className="text-center">octaves</p>
          </div>
          <div id="sensitivity">
            <Knob
              className="w-7 h-7 m-4"
              name="sensitivity"
              onChange={val => {
                setSensitivity(val);
              }}
              skin={s10}
              min={-40}
              max={0}
            />
            <p className="text-xs text-center">{sensitivity.toFixed(2)}</p>
            <p className="text-center">Sensitivity</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div id="gain">
            <Knob
              className="w-7 h-7 m-4"
              name="gain"
              onChange={val => {
                setGain(val);
              }}
              skin={s10}
              min={0}
              max={5}
            />
            <p className="text-xs text-center">{gain.toFixed(2)}</p>
            <p className="text-center">Gain</p>
          </div>
          <div id="attack" className="text-center">
            <Knob
              className="w-7 h-7 m-4"
              name="attack"
              onChange={val => {
                setAttack(val);
              }}
              skin={s10}
              min={0}
              max={1}
            />
            <p className="text-xs">{attack.toFixed(2)}</p>
            <p>Attack</p>
          </div>
          <div id="release" className="text-center">
            <Knob
              className="w-7 h-7 m-4"
              name="release"
              onChange={val => {
                setRelease(val);
              }}
              skin={s10}
              min={0}
              max={1}
            />
            <p className="text-xs">{release.toFixed(2)}</p>
            <p>Release</p>
          </div>
          <div id="q" className="text-center">
            <Knob
              className="w-7 h-7 m-4"
              name="q"
              onChange={val => {
                setQ(val);
              }}
              skin={s10}
              min={0}
              max={10}
            />
            <p className="text-xs">{q.toFixed(2)}</p>
            <p>Q</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoWah;
