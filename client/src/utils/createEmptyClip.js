import createInitialGrid from './createInitialGrid';
import { randomBgColorGenTailwind } from './randomBgColorGenTailwind';

export const createEmptyClip = (trackName, numberofClips) => {
  const name = trackName + (numberofClips + 1).toString();

  let clip = { name, grid: createInitialGrid(24, 24), length: 24, octaves: 2, color: randomBgColorGenTailwind() };
  return clip;
};
