import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TrackInfo from './TrackInfo';
import Clip from './Clip';
import PropTypes from 'prop-types';
import { selectedTrack, selectedClip } from '../../actions/selected';

const Track = ({ trackInfo, tracks, position, updated, selectedClip, selectedTrack }) => {
  const { name, type, clips } = trackInfo;

  useEffect(() => {}, [updated]);

  // // find track by name

  return (
    <div onClick={() => selectedTrack(name, type, clips.length)} className="bg-gray-400 w-full flex flex-row h-32 ">
      <div className="flex w-full">
        <div className="w-1/5 " id="trackInfoBar">
          <TrackInfo trackInfo={tracks[position]} position={position} />
        </div>

        <div className="w-full border border-gray-200 flex">
          {tracks[position].clips.map(clip => {
            return <Clip key={clip.name} clip={clip}></Clip>;
          })}
        </div>
      </div>
    </div>
  );
};
Track.propTypes = {
  tracks: PropTypes.array.isRequired,
  updated: PropTypes.bool.isRequired,
  selectedTrack: PropTypes.func.isRequired,
  selectedClip: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tracks: state.tracksReducer.tracks,
  updated: state.tracksReducer.updated
});
export default connect(mapStateToProps, { selectedClip, selectedTrack })(Track);
