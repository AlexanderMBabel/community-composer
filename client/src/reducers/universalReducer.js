import { NUMBER_OF_STEPS, SELECTED_CLIP, SELECTED_TRACK } from '../actions/types';

const initialState = {
  steps: 24,
  selectedTrack: { type: null, name: null },
  selectedClip: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NUMBER_OF_STEPS:
      return { ...state, steps: payload };
    case SELECTED_TRACK:
      return { ...state, selectedTrack: payload };
    case SELECTED_CLIP:
      return { ...state, selectedClip: payload };
    default:
      return state;
  }
};
