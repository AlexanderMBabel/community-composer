const numberToNote = number => {
  switch (number) {
    case 0:
      return 'B4';
    case 1:
      return 'Bb4';
    case 2:
      return 'A4';
    case 3:
      return 'G#4';
    case 4:
      return 'G4';
    case 5:
      return 'F#4';
    case 6:
      return 'F4';
    case 7:
      return 'E4';
    case 8:
      return 'Eb4';
    case 9:
      return 'D4';
    case 10:
      return 'C#4';
    case 11:
      return 'C4';
    case 12:
      return 'B3';
    case 13:
      return 'Bb3';
    case 14:
      return 'A3';
    case 15:
      return 'G#3';
    case 16:
      return 'G3';
    case 17:
      return 'F#3';
    case 18:
      return 'F3';
    case 19:
      return 'E3';
    case 20:
      return 'Eb3';
    case 21:
      return 'D3';
    case 22:
      return 'C#3';
    case 23:
      return 'C3';
    case 24:
      return 'B2';
    case 25:
      return 'Bb2';
    case 26:
      return 'A2';
    case 27:
      return 'G#2';
    case 28:
      return 'G2';
    case 29:
      return 'F#2';
    case 30:
      return 'F2';
    case 31:
      return 'E2';
    case 32:
      return 'Eb2';
    case 33:
      return 'D2';
    case 34:
      return 'C#2';
    case 35:
      return 'C2';
    case 36:
      return 'B1';
    case 37:
      return 'Bb1';
    case 38:
      return 'A1';
    case 39:
      return 'G#1';
    case 40:
      return 'G1';
    case 41:
      return 'F#1';
    case 42:
      return 'F1';
    case 43:
      return 'E1';
    case 44:
      return 'Eb1';
    case 45:
      return 'D1';
    case 46:
      return 'C#1';
    case 47:
      return 'C1';

    default:
      return 'other';
  }
};

export default numberToNote;
