import { NUMBER_OF_STEPS } from '../actions/types';

const initialState = {
  steps: 24
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NUMBER_OF_STEPS:
      return { ...state, steps: payload };
    default:
      return state;
  }
};
