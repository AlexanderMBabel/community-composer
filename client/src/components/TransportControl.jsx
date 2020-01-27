import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Tone from 'tone';
import gridToPlayableGrid from '../utils/gridToPlayableGrid';

import { MdPlayArrow, MdStop } from 'react-icons/md';
import { melodyGrid } from '../actions/grids';
import numberToNote from '../utils/numberToNote';

const TransportControl = ({ melody, melodyInst }) => {
  let index = 0;
  // **TODO** get number of steps from redux
  const NumberOfSteps = 30;
  let playableMelody = gridToPlayableGrid(melody);
  const play = () => {
    // playableMelody = gridToPlayableGrid(melody)
  };

  const repeat = () => {
    let step = index % NumberOfSteps;
    if (playableMelody[step].length > 0) {
      let notes = playableMelody[step].map(note => numberToNote(note));
    }
  };
  return (
    <div className="bg-gray-800 flex items-center justify-center">
      <div className="p-3 bg-gray-300 m-2 rounded-r-sm">
        <MdPlayArrow onClick={play} />
      </div>
      <div className="p-3 bg-gray-300 m-2 rounded-sm">
        <MdStop />
      </div>
    </div>
  );
};

TransportControl.protoTypes = {
  melody: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  state: state,
  melody: state.sectionsGridReducer.melodyGrid,
  melodyInst: state.instrumentReducer.melodyInst
});

export default connect(mapStateToProps)(TransportControl);
