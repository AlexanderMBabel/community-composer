export const findPosition = (tracks, trackName, clipName) => {
  let position = {};

  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].name === trackName) {
      position.track = i;
    }
  }
  let clips = tracks[position.track].clips;
  for (let i = 0; i < clips.length; i++) {
    if (clips[i].name === clipName) {
      position.clip = i;
    }
  }
  return position;
};
