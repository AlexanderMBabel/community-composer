import { ADD_INSTRUMENT } from './types';

export const addInstrumentAction = (instrument, position) => dispatch => {
  dispatch({
    type: ADD_INSTRUMENT,
    payload: instrument,
    position
  });
};
