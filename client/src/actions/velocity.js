import { MELODY_VEL, CHORD_VEL, BASS_VEL, BEAT_VEL } from './types';

export const melodyVel = vel => dispatch => {
  dispatch({
    type: MELODY_VEL,
    payload: vel
  });
};
export const chordVel = vel => dispatch => {
  dispatch({
    type: CHORD_VEL,
    payload: vel
  });
};
export const bassVel = vel => dispatch => {
  dispatch({
    type: BASS_VEL,
    payload: vel
  });
};
export const beatVel = vel => dispatch => {
  dispatch({
    type: BEAT_VEL,
    payload: vel
  });
};
