import React from 'react';
import { Menu, Item, Separator } from 'react-contexify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClipAction } from '../../actions/tracks';
import { createEmptyClip } from '../../utils/createEmptyClip';

const TrackContextMenu = ({ setDisplayAdd, selectedTrack, selectedClip, addClipAction }) => {
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
      <Item disabled={selectedClip === null ? true : false}>remove clip</Item>
    </Menu>
  );
};

const mapStateToProps = state => ({
  selectedTrack: state.universalReducer.selectedTrack,
  selectedClip: state.universalReducer.selectedClip
});
export default connect(mapStateToProps, { addClipAction })(TrackContextMenu);
