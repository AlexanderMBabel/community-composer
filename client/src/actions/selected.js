import { SELECTED_TRACK, SELECTED_CLIP } from './types';

export const selectedTrack = (name, type) => dispatch => {
  dispatch({
    type: SELECTED_TRACK,
    payload: { name, type }
  });
};

export const selectedClip = clip => dispatch => {
  dispatch({
    type: SELECTED_CLIP,
    payload: clip
  });
};
