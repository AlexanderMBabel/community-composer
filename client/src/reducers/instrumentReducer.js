import { MELODY_INST, BEAT_INST, BASS_INST } from '../actions/types';

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
    default:
      return state;
  }
};
