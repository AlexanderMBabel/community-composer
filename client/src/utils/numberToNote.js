const numberToNote = number => {
  switch (number) {
    case 0:
      return 'B3';
    case 1:
      return 'Bb3';
    case 2:
      return 'A3';
    case 3:
      return 'G#3';
    case 4:
      return 'G3';
    case 5:
      return 'F#3';
    case 6:
      return 'F3';
    case 7:
      return 'E3';
    case 8:
      return 'Eb3';
    case 9:
      return 'D3';
    case 10:
      return 'C#3';
    case 11:
      return 'C3';
    case 12:
      return 'B2';
    case 13:
      return 'Bb2';
    case 14:
      return 'A2';
    case 15:
      return 'G#2';
    case 16:
      return 'G2';
    case 17:
      return 'F#2';
    case 18:
      return 'F2';
    case 19:
      return 'E2';
    case 20:
      return 'Eb2';
    case 21:
      return 'D2';
    case 22:
      return 'C#2';
    case 23:
      return 'C2';
    default:
      return 'other';
  }
};

export default numberToNote;
