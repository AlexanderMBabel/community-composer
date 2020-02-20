import { ADD_TRACK, ADD_CLIP, UPDATE_CLIP, REMOVE_CLIP, ADD_INSTRUMENT } from '../actions/types';

const initialState = {
  tracks: [],
  updated: false
};

export default (state = initialState, action) => {
  const { type, payload, destinationTrack, position } = action;
  switch (type) {
    case ADD_TRACK:
      return {
        updated: !state.updated,
        tracks: [...state.tracks, payload]
      };
    case ADD_CLIP:
      let updatedTracks = state.tracks;
      let positionOfTrack = 0;
      //Find the position for clip

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
    case UPDATE_CLIP:
      let tempTracks = state.tracks;
      tempTracks[position.trackPosition].clips[position.clipPosition] = payload;
      return { updated: !state.updated, tracks: tempTracks };
    case REMOVE_CLIP:
      return { updated: !state.updated, tracks: payload };
    case ADD_INSTRUMENT:
      console.log('fired');
      let tempInstTracks = state.tracks;
      tempInstTracks[position].instrument = payload;
      return { tracks: tempInstTracks, updated: !state.updated };
    default:
      return state;
  }
};
