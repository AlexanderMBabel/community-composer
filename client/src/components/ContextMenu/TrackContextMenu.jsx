import React from 'react';
import { Menu, Item, Separator } from 'react-contexify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClipAction, removeClipAction } from '../../actions/tracks';
import { createEmptyClip } from '../../utils/createEmptyClip';
import { findPosition } from '../../utils/findPosition';

const TrackContextMenu = ({ setDisplayAdd, selectedTrack, selectedClip, addClipAction, removeClipAction, tracks }) => {
  const removeClip = () => {
    let position = findPosition(tracks, selectedTrack.name, selectedClip.name);
    let tempTracks = tracks;
    tempTracks[position.track].clips.splice(position.clip);
    removeClipAction(tempTracks);
  };
  return (
    <Menu id="trackMenu">
      <Item onClick={() => setDisplayAdd(true)}>add track</Item>

      <Item
        onClick={() => {
          addClipAction(createEmptyClip(selectedTrack.name, selectedTrack.numberOfClips), selectedTrack.name);
        }}
        disabled={selectedTrack.name === null ? true : false}
      >
        add clip
      </Item>
      <Separator />
      <Item disabled={selectedTrack.name === null ? true : false}>remove track</Item>
      <Item onClick={removeClip} disabled={selectedClip === null ? true : false}>
        remove clip
      </Item>
    </Menu>
  );
};

const mapStateToProps = state => ({
  selectedTrack: state.universalReducer.selectedTrack,
  selectedClip: state.universalReducer.selectedClip,
  tracks: state.tracksReducer.tracks
});
export default connect(mapStateToProps, { addClipAction, removeClipAction })(TrackContextMenu);
