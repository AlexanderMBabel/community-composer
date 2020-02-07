import { NUMBER_OF_STEPS } from './types';
export const numberOfSteps = steps => dispatch => {
  dispatch({
    type: NUMBER_OF_STEPS,
    payload: steps
  });
};
