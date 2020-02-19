import { ADD_TRACK, ADD_CLIP } from './types';

export const addTrackAction = track => dispatch => {
  dispatch({
    type: ADD_TRACK,
    payload: track
  });
};

export const addClipAction = (clip, destinationTrack) => dispatch => {
  dispatch({
    type: ADD_CLIP,
    payload: clip,
    destinationTrack
  });
};
