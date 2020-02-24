import { ADD_INSTRUMENT, TWEEK_INSTRUMENT } from './types';

export const addInstrumentAction = (instrument, position, name, settings) => dispatch => {
  dispatch({
    type: ADD_INSTRUMENT,
    payload: instrument,
    position,
    instrumentName: name,
    settings
  });
};

export const tweekInstrument = (position, value, name) => dispatch => {
  dispatch({
    type: TWEEK_INSTRUMENT,
    payload: { value, name },
    position
  });
};
