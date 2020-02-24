import { SELECTED_TRACK, SELECTED_CLIP, SELECTED_MENU_ITEM } from './types';

export const selectedTrack = (name, type, numberOfClips, track, position) => dispatch => {
  dispatch({
    type: SELECTED_TRACK,
    payload: { name, type, numberOfClips, track, position }
  });
};

export const selectedClip = clip => dispatch => {
  dispatch({
    type: SELECTED_CLIP,
    payload: clip
  });
};

export const selectedMenuItem = item => dispatch => {
  dispatch({
    type: SELECTED_MENU_ITEM,
    payload: item
  });
};
