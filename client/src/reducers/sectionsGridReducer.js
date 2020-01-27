import { BEAT_GRID, MELODY_GRID, BASS_GRID, CHORD_GRID } from '../actions/types';

const initialState = {
  melodyGrid: [],
  chordGrid: [],
  beatGrid: [],
  bassGrid: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MELODY_GRID:
      return {
        ...state,
        melodyGrid: action.payload
      };
    case BEAT_GRID:
      return {
        ...state,
        beatGrid: action.payload
      };
    case BASS_GRID:
      return {
        ...state,
        bassGrid: action.payload
      };
    case CHORD_GRID:
      return {
        ...state,
        chordGrid: action.payload
      };

    default:
      return state;
  }
};
