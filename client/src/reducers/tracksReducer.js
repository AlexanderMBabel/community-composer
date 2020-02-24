import { ADD_TRACK, ADD_CLIP, UPDATE_CLIP, REMOVE_CLIP, ADD_INSTRUMENT, TWEEK_INSTRUMENT, ADD_EFFECT } from '../actions/types';

const initialState = {
  tracks: [],
  updated: false
};

export default (state = initialState, action) => {
  const { type, payload, destinationTrack, position, instrumentName, settings } = action;
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
      let tempInstTracks = state.tracks;
      tempInstTracks[position].instrument = payload;
      tempInstTracks[position].instrumentName = instrumentName;
      tempInstTracks[position].settings = settings;
      return { tracks: tempInstTracks, updated: !state.updated };
    case TWEEK_INSTRUMENT:
      let tempTweekTracks = state.tracks;
      let tempSettings = tempTweekTracks[position].settings.settings;

      for (let i = 0; i < tempSettings.length; i++) {
        if (tempSettings[i].name === payload.name) {
          let matchIndex = i;
          tempSettings[matchIndex].default = payload.value;
          tempSettings[matchIndex].value = payload.value;

          tempTweekTracks[position].settings.settings = tempSettings;
        }
      }

      return { tracks: tempTweekTracks };
    case ADD_EFFECT:
      let tempEffect = state.tracks;
      tempEffect[position].effects.push({ name: payload.name, effect: payload.effect, settings: payload.settings });
    default:
      return state;
  }
};
