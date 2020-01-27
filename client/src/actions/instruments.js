import { FM_SYNTH, SIMPLE_SYNTH, SAMPLER, POLY_SYNTH, DUO_SYNTH, MELODY_INST } from './types';

export const melodyInstrument = instrument => dispatch => {
  dispatch({
    type: MELODY_INST,
    payload: instrument
  });
};
