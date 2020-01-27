import { MELODY_INST } from '../actions/types';

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
    default:
      return state;
  }
};
