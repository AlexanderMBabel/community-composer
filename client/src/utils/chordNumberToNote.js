const chordNumberToNote = note => {
  switch (note) {
    case 0:
      return 'A2';
    case 1:
      return 'Bb3';
    case 2:
      return 'B2';
    case 3:
      return 'C3';
    case 4:
      return 'C#4';
    case 5:
      return 'D3';
    case 6:
      return 'D#2';
    case 7:
      return 'E3';
    case 8:
      return 'F2';
    case 9:
      return 'F#4';
    case 10:
      return 'G3';
    case 11:
      return 'G#2';
    default:
      return;
  }
};

export default chordNumberToNote;
