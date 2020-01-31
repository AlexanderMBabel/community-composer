import { MELODY_INST, BEAT_INST, BASS_INST, CHORD_INST } from '../actions/types';

const initialState = {
  melodyInst: null,
  chordInst: null,
  beatInst: null,
  bassInst: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MELODY_INST:
      return { ...state, melodyInst: payload };
    case BEAT_INST:
      return { ...state, beatInst: payload };
    case BASS_INST:
      return { ...state, bassInst: payload };
    case CHORD_INST:
      return { ...state, chordInst: payload };
    default:
      return state;
  }
};
