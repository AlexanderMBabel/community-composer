import { SELECTED_TRACK, SELECTED_CLIP } from './types';

export const selectedTrack = (name, type, numberOfClips) => dispatch => {
  dispatch({
    type: SELECTED_TRACK,
    payload: { name, type, numberOfClips }
  });
};

export const selectedClip = clip => dispatch => {
  dispatch({
    type: SELECTED_CLIP,
    payload: clip
  });
};
