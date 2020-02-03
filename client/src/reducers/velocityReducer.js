import { BASS_VEL, BEAT_VEL, CHORD_VEL, MELODY_VEL } from '../actions/types';

const initialState = {
  melodyVel: [],
  chordVel: [],
  beatVel: [],
  bassVel: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MELODY_VEL:
      return { ...state, melodyVel: payload };
    case BASS_VEL:
      return { ...state, bassVel: payload };
    case BEAT_VEL:
      return { ...state, beatVel: payload };
    case CHORD_VEL:
      return { ...state, chordVel: payload };
    default:
      return state;
  }
};
