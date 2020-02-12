import chordNumberToNote from './chordNumberToNote';

//  Generate requested scale as a 7 number array using number 0-11 to represent notes A - G#

export const generateScale = scaleSteps => {
  let scale = [0];

  for (let i = 0; i < 7; i++) {
    scale.push(scaleSteps[i] + scale[i]);
  }
  return scale;
};

export const transposeScale = (scale, key) => {
  let transposed = scale.map(note => {
    let newNote = note + key;
    if (newNote > 11) {
      newNote = newNote - 12;
    }
    return newNote;
  });
  return transposed;
};

export const generateProgression = (scale, progression) => {
  let chordRootScales = progression.map(step => transposeScale(scale, step));

  return chordRootScales.map(chordScale => createChord(chordScale));
};

export const createChord = scale => {
  return [chordNumberToNote(scale[0]), chordNumberToNote(scale[2]), chordNumberToNote(scale[4])];
};

export const createPattern = (chords, pattern) => {
  // const numberOfChords = chords.length;
  let patternGrid = [];
  pattern.forEach(step => {
    if (step === 'space') {
      patternGrid.push([]);
    } else {
      patternGrid.push(chords[step]);
    }
  });
  return [...patternGrid];
};

const scalePatternToSteps = (chordPattern, steps) => {
  const wholePatternTimes = Math.floor(steps / 12);
  const fractionPatternTimes = steps % 12;
  let pattern = [];
  let fraction = [];
  for (let i = 0; i < wholePatternTimes; i++) {
    pattern = [...pattern, ...chordPattern];
  }

  for (let i = 0; i < fractionPatternTimes; i++) {
    fraction.push(chordPattern[i]);
  }
  pattern = [...pattern, ...fraction];
  return pattern;
};

const chordProgressionGenerator = (scaleType, key, progression, pattern, steps) => {
  let scale = generateScale(scaleType);
  let transposedScale = transposeScale(scale, key);
  let chordProgression = generateProgression(transposedScale, progression);
  let chordPattern = createPattern(chordProgression, pattern);
  let scalePattern = scalePatternToSteps(chordPattern, steps);
  return scalePattern;
};

export const changeStlyeOnProgressionLength = (progression, style) => {
  if (progression.length === 4) {
    style.map(step => step === 'space' && 3);
  }
};

export default chordProgressionGenerator;
