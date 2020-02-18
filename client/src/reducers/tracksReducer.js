import { TRACKS, ADD_TRACK } from '../actions/types';

const initialState = {
  tracks: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRACK:
      return {
        tracks: [...state.tracks, payload]
      };
    default:
      return state;
  }
};
