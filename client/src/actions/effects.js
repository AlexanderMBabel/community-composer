import { MELODY_EFFECT_1, MELODY_EFFECT_2, BEAT_EFFECT_1, BEAT_EFFECT_2, BASS_EFFECT_1, BASS_EFFECT_2, CHORD_EFFECT_1, CHORD_EFFECT_2 } from './types';

export const melodyEffect1 = effect => dispatch => {
  dispatch({
    type: MELODY_EFFECT_1,
    payload: effect
  });
};

export const melodyEffect2 = effect => dispatch => {
  dispatch({
    type: MELODY_EFFECT_2,
    payload: effect
  });
};
export const beatEffect1 = effect => dispatch => {
  dispatch({
    type: BEAT_EFFECT_1,
    payload: effect
  });
};
export const beatEffect2 = effect => dispatch => {
  dispatch({
    type: BEAT_EFFECT_2,
    payload: effect
  });
};
export const bassEffect1 = effect => dispatch => {
  dispatch({
    type: BASS_EFFECT_1,
    payload: effect
  });
};
export const bassEffect2 = effect => dispatch => {
  dispatch({
    type: BASS_EFFECT_2,
    payload: effect
  });
};
export const chordEffect1 = effect => dispatch => {
  dispatch({
    type: CHORD_EFFECT_1,
    payload: effect
  });
};
export const chordEffect2 = effect => dispatch => {
  dispatch({
    type: CHORD_EFFECT_2,
    payload: effect
  });
};
