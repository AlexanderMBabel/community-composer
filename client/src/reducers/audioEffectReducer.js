import { MELODY_EFFECT_1, CHORD_EFFECT_1, BASS_EFFECT_1, BEAT_EFFECT_1, MELODY_EFFECT_2, BASS_EFFECT_2, BEAT_EFFECT_2, CHORD_EFFECT_2 } from '../actions/types';

const initialState = {
  melodyEffect1: null,
  melodyEffect2: null,
  bassEffect1: null,
  bassEffect2: null,
  beatEffect1: null,
  beatEffect2: null,
  chordEffect1: null,
  chordEffect2: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MELODY_EFFECT_1:
      return { ...state, melodyEffect1: payload };
    case MELODY_EFFECT_2:
      return { ...state, melodyEffect2: payload };
    case BASS_EFFECT_1:
      return { ...state, bassEffect1: payload };
    case BASS_EFFECT_2:
      return { ...state, bassEffect2: payload };
    case BEAT_EFFECT_1:
      return { ...state, beatEffect1: payload };
    case BEAT_EFFECT_2:
      return { ...state, beatEffect2: payload };
    case CHORD_EFFECT_1:
      return { ...state, chordEffect1: payload };
    case CHORD_EFFECT_2:
      return { ...state, chordEffect2: payload };
    default:
      return state;
  }
};
