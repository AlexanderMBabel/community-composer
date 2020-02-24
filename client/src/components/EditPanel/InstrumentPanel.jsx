import React from 'react';
import InstrumentContainer from '../instruments/Display/InstrumentContainer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayEffects from '../effects/display/DisplayEffects';

const InstrumentPanel = ({ selectedTrack, tracks }) => {
  return (
    <div className="w-full flex-row">
      <p>{selectedTrack.name}</p>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-1/4 pl-4">{tracks[selectedTrack.position].instrument !== null ? <InstrumentContainer /> : <div>Please Select an instrument</div>}</div>
        <div className="w-1/2">
          <DisplayEffects />
        </div>
      </div>
    </div>
  );
};
InstrumentPanel.propTypes = {
  selectedTrack: PropTypes.object,
  tracks: PropTypes.array
};

const mapStateToProps = state => ({
  selectedTrack: state.universalReducer.selectedTrack,
  tracks: state.tracksReducer.tracks
});
export default connect(mapStateToProps, {})(InstrumentPanel);
