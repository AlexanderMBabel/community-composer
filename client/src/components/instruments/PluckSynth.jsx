import React, { useState, useEffect } from 'react';
import { Knob } from 'react-rotary-knob';
import { s11 } from 'react-rotary-knob-skin-pack';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { melodyInstrument, bassInstrument } from '../../actions/instruments';
import { PluckSynth as PluckSynthTone } from 'tone';
const PluckSynth = ({ section, melodyInstrument, bassInstrument }) => {
  const [attackNoise, setAttackNoise] = useState(1);
  const [dampening, setDampening] = useState(4000);
  const [resonance, setResonance] = useState(0.7);
  const [volume, setVolume] = useState(0);
  let soundSettings = {
    attackNoise: attackNoise,
    dampening: dampening,
    resonance: resonance
  };

  let pluckSynth = new PluckSynthTone(soundSettings).toMaster();
  pluckSynth.volume.value = volume;
  useEffect(() => {
    if (section === 'melody') {
      melodyInstrument(pluckSynth);
    }
    if (section === 'bass') {
      bassInstrument(pluckSynth);
    }
  }, [pluckSynth, bassInstrument, melodyInstrument, section, soundSettings, volume]);
  return (
    <div className="theme-bg-maroon border-4 shadow-inner">
      <div>
        <div id="attackNoise" className="text-center">
          <Knob
            className="w-7 h-7 m-2"
            name="attackNoise"
            onChange={val => {
              setAttackNoise(val);
            }}
            value={attackNoise}
            skin={s11}
            min={0}
            max={4}
          />
          <p className="text-xs">{attackNoise.toFixed(2)}</p>
          <p>attackNoise</p>
        </div>
        <div id="dampening" className="text-center">
          <Knob
            className="w-7 h-7 m-2"
            name="dampening"
            onChange={val => {
              setDampening(val);
            }}
            value={dampening}
            skin={s11}
            step={400}
            min={100}
            max={7000}
          />
          <p className="text-xs">{dampening.toFixed(2)}</p>
          <p>dampening</p>
        </div>
        <div id="resonance" className="text-center">
          <Knob
            className="w-7 h-7 m-2"
            name="resonance"
            onChange={val => {
              setResonance(val);
            }}
            value={resonance}
            skin={s11}
            min={0}
            max={1}
          />
          <p className="text-xs">{resonance.toFixed(2)}</p>
          <p>resonance</p>
        </div>
        <div id="volume" className="text-center">
          <Knob
            className="w-7 h-7 m-2"
            name="volume"
            onChange={val => {
              setVolume(val);
            }}
            skin={s11}
            min={-30}
            max={40}
          />
          <p className="text-xs">{volume.toFixed(2)}</p>
          <p>volume</p>
        </div>
      </div>
    </div>
  );
};

PluckSynth.propTypes = {
  melodyInstrument: PropTypes.func.isRequired,
  bassInstrument: PropTypes.func.isRequired
};

export default connect(null, { melodyInstrument, bassInstrument })(PluckSynth);
