import { BEAT_INST, MELODY_INST, BASS_INST, CHORD_INST } from './types';

export const melodyInstrument = instrument => dispatch => {
  dispatch({
    type: MELODY_INST,
    payload: instrument
  });
};

export const beatInstrument = instrument => dispatch => {
  dispatch({
    type: BEAT_INST,
    payload: instrument
  });
};

export const bassInstrument = instrument => dispatch => {
  dispatch({
    type: BASS_INST,
    payload: instrument
  });
};

export const chordInstrument = instrument => dispatch => {
  dispatch({
    type: CHORD_INST,
    payload: instrument
  });
};
