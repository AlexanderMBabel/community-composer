const chordNumberToNote = note => {
  switch (note) {
    case 0:
      return 'A3';
    case 1:
      return 'Bb3';
    case 2:
      return 'B3';
    case 3:
      return 'C3';
    case 4:
      return 'C#3';
    case 5:
      return 'D3';
    case 6:
      return 'D#3';
    case 7:
      return 'E3';
    case 8:
      return 'F3';
    case 9:
      return 'F#3';
    case 10:
      return 'G3';
    case 11:
      return 'G#3';
    default:
      return;
  }
};

export default chordNumberToNote;
