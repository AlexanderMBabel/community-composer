import { ADD_EFFECT, TWEEK_EFFECT, REMOVE_EFFECT } from './types';

export const addEffect = (effect, position, name, settings) => dispatch => {
  dispatch({
    type: ADD_EFFECT,
    payload: { effect, name, settings },
    position
  });
};

export const tweekEffect = (name, position, settings) => dispatch => {
  dispatch({
    type: TWEEK_EFFECT,
    payload: { name, settings },
    position
  });
};

export const removeEffect = (name, position) => dispatch => {
  dispatch({
    type: REMOVE_EFFECT,
    payload: { name },
    position
  });
};

// export const melodyEffect1 = effect => dispatch => {
//   dispatch({
//     type: MELODY_EFFECT_1,
//     payload: effect
//   });
// };

// export const melodyEffect2 = effect => dispatch => {
//   dispatch({
//     type: MELODY_EFFECT_2,
//     payload: effect
//   });
// };
// export const beatEffect1 = effect => dispatch => {
//   dispatch({
//     type: BEAT_EFFECT_1,
//     payload: effect
//   });
// };
// export const beatEffect2 = effect => dispatch => {
//   dispatch({
//     type: BEAT_EFFECT_2,
//     payload: effect
//   });
// };
// export const bassEffect1 = effect => dispatch => {
//   dispatch({
//     type: BASS_EFFECT_1,
//     payload: effect
//   });
// };
// export const bassEffect2 = effect => dispatch => {
//   dispatch({
//     type: BASS_EFFECT_2,
//     payload: effect
//   });
// };
// export const chordEffect1 = effect => dispatch => {
//   dispatch({
//     type: CHORD_EFFECT_1,
//     payload: effect
//   });
// };
// export const chordEffect2 = effect => dispatch => {
//   dispatch({
//     type: CHORD_EFFECT_2,
//     payload: effect
//   });
// };
