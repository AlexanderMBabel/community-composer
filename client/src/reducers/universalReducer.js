import { NUMBER_OF_STEPS, SELECTED_CLIP, SELECTED_TRACK, SELECTED_MENU_ITEM } from '../actions/types';

const initialState = {
  steps: 24,
  selectedTrack: { type: null, name: null, numberofSteps: 0 },
  selectedClip: null,
  updated: false,
  selectedMenuItem: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NUMBER_OF_STEPS:
      return { ...state, steps: payload };
    case SELECTED_TRACK:
      return { ...state, selectedTrack: payload };
    case SELECTED_CLIP:
      return { ...state, selectedClip: payload, updated: !state.updated };
    case SELECTED_MENU_ITEM:
      return { ...state, selectedMenuItem: payload, updated: !state.updated };
    default:
      return state;
  }
};
