import { randomBgColorGenTailwind } from './randomBgColorGenTailwind';
export const initSettingsInfo = [
  {
    name: 'FMSynth',
    settings: [
      { name: 'harmonicity', default: 3, min: 0, max: 3, type: 'number' },
      { name: 'modulationIndex', default: 10, min: 0, max: 500, type: 'number' },
      { name: 'detune', default: 0, min: 0, max: 99, type: 'number' },
      { name: 'oscillator.type', default: 'sine', min: 0, max: 5, type: 'wave' },
      { name: 'env.attack', default: 0.01, min: 0, max: 1, type: 'number', group: 'env' },
      { name: 'env.decay', default: 0.01, min: 0, max: 1, type: 'number', group: 'env' },
      { name: 'env.sustain', default: 1, min: 0.05, max: 3, type: 'number', group: 'env' },
      { name: 'env.release', default: 0.5, min: 0.1, max: 4, type: 'number', group: 'env' },
      { name: 'mod', default: 'square', min: 0, max: 5, type: 'wave' },
      { name: 'mod.attack', default: 0.5, min: 0, max: 2, type: 'number', group: 'mod' },
      { name: 'mod.decay', default: 0, min: 0, max: 2, type: 'number', group: 'mod' },
      { name: 'mod.sustain', default: 1, min: 0.05, max: 3, type: 'number', group: 'mod' },
      { name: 'mod.release', default: 0.5, min: 0.1, max: 4, type: 'number', group: 'mod' }
    ]
  },
  {
    name: 'PluckSynth',
    settings: [
      { name: 'attackNoise', default: 1, min: 0.1, max: 20, type: 'number' },
      { name: 'dampening', default: 4000, min: 3000, max: 10000, type: 'number' },
      { name: 'resonance', default: 0.7, min: 0.1, max: 10, type: 'number' }
    ]
  },
  {
    name: 'Sampler',
    settings: [
      { name: 'attack', default: 0, min: 0, max: 1, type: 'number' },
      { name: 'release', default: 0.1, min: 0.1, max: 3, type: 'number' },
      { name: 'curve', default: 'exponential', min: 'exponential', max: 'linear', type: 'curve' }
    ]
  },
  {
    name: 'DuoSynth',
    settings: [
      { name: 'vibratoAmount', default: 0.5, min: 0, max: 3, type: 'number' },
      { name: 'VibratoRate', default: 5, min: 0, max: 20, type: 'number' },
      { name: 'harmonicity', default: 1.5, min: 0, max: 3, type: 'number' },
      { name: 'oscillator.type', default: 'sine', min: 0, max: 5, type: 'wave', group: 'voice0' },
      { name: 'env.attack', default: 0.01, min: 0, max: 1, type: 'number', group: 'env' },
      { name: 'env.decay', default: 0.01, min: 0, max: 1, type: 'number', group: 'env' },
      { name: 'env.sustain', default: 1, min: 0.05, max: 3, type: 'number', group: 'env' },
      { name: 'env.release', default: 0.5, min: 0.1, max: 4, type: 'number', group: 'env' },
      { name: 'mod', default: 'square', min: 0, max: 5, type: 'wave' },
      { name: 'mod.attack', default: 0.5, min: 0, max: 2, type: 'number', group: 'mod' },
      { name: 'mod.decay', default: 0, min: 0, max: 2, type: 'number', group: 'mod' },
      { name: 'mod.sustain', default: 1, min: 0.05, max: 3, type: 'number', group: 'mod' },
      { name: 'mod.release', default: 0.5, min: 0.1, max: 4, type: 'number', group: 'mod' }
    ]
  }
];

export const initSettingsInfoWithColor = () => {
  let settingInfo = initSettingsInfo;
  initSettingsInfo.forEach((inst, iter) => {
    let newSettings = inst.settings.map(setting => {
      return { ...setting, color: randomBgColorGenTailwind() };
    });
    settingInfo[iter].settings = newSettings;
  });
  console.log(settingInfo);
  return settingInfo;
};

export const initEffectSettings = [
  {
    name: 'Distortion',
    settings: [
      { name: 'distortion', value: 0.4, min: 0, max: 1, type: 'number' },
      { name: 'oversample', value: 'none', min: 0, max: 3, type: 'oversample' }
    ]
  },
  {
    name: 'Reverb',
    settings: [
      { name: 'roomSize', value: 0.7, min: 0, max: 1, type: 'number' },
      { name: 'dampening', value: '3000', min: 500, max: 1000, type: 'number' }
    ]
  },
  {
    name: 'Chorus',
    settings: [
      { name: 'frequency', value: 1.5, min: 1, max: 800, type: 'number' },
      { name: 'delayTime', value: 3.5, min: 0, max: 10, type: 'number' },
      { name: 'depth', value: 0.7, min: 0, max: 1, type: 'number' },
      { name: 'type', value: 'sine', min: 0, max: 5, type: 'wave' },
      { name: 'spread', value: 180, min: 0, max: 360, type: 'number' }
    ]
  },
  {
    name: 'Phaser',
    settings: [
      { name: 'frequency', value: 0.5, min: 0, max: 800, type: 'number' },
      { name: 'octaves', value: 3, min: 1, max: 6, type: 'number' },
      { name: 'stages', value: 10, min: 0, max: 20, type: 'number' },
      { name: 'Q', value: 10, min: 0, max: 25, type: 'wave' },
      { name: 'baseFrequency', value: 350, min: 20, max: 1000, type: 'number' }
    ]
  },
  {
    name: 'Delay',
    settings: [
      { name: 'maxDelay', value: 1, min: 0, max: 10, type: 'number' },
      { name: 'delayTime', value: 0.25, min: 0, max: 10, type: 'number' }
    ]
  }
];
