import * as Tone from 'tone';
export const loadEffect = name => {
  switch (name) {
    case 'Distortion':
      return new Tone.Distortion();
    case 'Reverb':
      return new Tone.Freeverb();
    case 'Delay':
      return new Tone.FeedbackDelay();
    case 'Chorus':
      return new Tone.Chorus();
    case 'Phaser':
      return new Tone.Phaser();
    default:
      return;
  }
};
