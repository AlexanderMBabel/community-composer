import * as Tone from 'tone';
export const loadInstrument = name => {
  switch (name) {
    case 'Sampler':
      return new Tone.Sampler();
    case 'FMSynth':
      return new Tone.FMSynth();
    case 'DuoSynth':
      return new Tone.DuoSynth();
    case 'Pluck':
      return new Tone.PluckSynth();
    default:
      return;
  }
};
