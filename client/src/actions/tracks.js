import { ADD_TRACK, ADD_CLIP, UPDATE_CLIP, REMOVE_CLIP } from './types';

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

export const updateClipAction = (clip, position) => dispatch => {
  dispatch({
    type: UPDATE_CLIP,
    payload: clip,
    position
  });
};

export const removeClipAction = clip => dispatch => {
  dispatch({
    type: REMOVE_CLIP,
    payload: clip
  });
};
