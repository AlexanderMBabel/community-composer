import { MELODY_GRID, BASS_GRID, BEAT_GRID, CHORD_GRID } from './types';

export const melodyGrid = grid => dispatch => {
  dispatch({
    type: MELODY_GRID,
    payload: grid
  });
};
export const bassGrid = grid => dispatch => {
  dispatch({
    type: BASS_GRID,
    payload: grid
  });
};
export const beatGrid = grid => dispatch => {
  dispatch({
    type: BEAT_GRID,
    payload: grid
  });
};
export const chordGrid = grid => dispatch => {
  dispatch({
    type: CHORD_GRID,
    payload: grid
  });
};
