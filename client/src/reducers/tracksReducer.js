import { ADD_TRACK, ADD_CLIP } from '../actions/types';

const initialState = {
  tracks: [],
  updated: false
};

export default (state = initialState, action) => {
  const { type, payload, destinationTrack } = action;
  switch (type) {
    case ADD_TRACK:
      return {
        tracks: [...state.tracks, payload]
      };
    case ADD_CLIP:
      let updatedTracks = state.tracks;
      let positionOfTrack = 0;

      for (let i = 0; i < updatedTracks.length; i++) {
        if (updatedTracks[i].name === destinationTrack) {
          positionOfTrack = i;
        }
      }
      let numberOfClips = updatedTracks[positionOfTrack].clips.length;
      updatedTracks[positionOfTrack].numberOfClips = numberOfClips;

      updatedTracks[positionOfTrack].clips.push(payload);

      return {
        updated: !state.updated,
        tracks: updatedTracks
      };
    default:
      return state;
  }
};
