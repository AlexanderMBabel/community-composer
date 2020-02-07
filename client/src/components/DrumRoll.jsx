import React, { useState } from 'react';
import createInitialGrid from '../utils/createInitialGrid';

import { connect } from 'react-redux';

import { beatGrid, updateGrid } from '../actions/grids';
import { numberOfSteps } from '../actions/numberOfSteps';
import numberToNote from '../utils/numberToNote';

import PropTypes from 'prop-types';

const DrumRoll = ({ beatInst, beatGrid, updateGrid, gridUpdated, steps, numberOfSteps }) => {
  const [drums, setDrums] = useState(createInitialGrid(24, 9));
  const [showBlock, setShowBlock] = useState(false);

  const stepClick = (drum, step) => {
    let tempDrums = drums;
    beatInst.triggerAttack(numberToNote(drum));
    tempDrums[drum][step] = !tempDrums[drum][step];
    setDrums(tempDrums);
    beatGrid(drums);
    // console.log(drums[drum][step]);
    setShowBlock(!showBlock);
    updateGrid(!gridUpdated);
  };

  return (
    <div className="flex flex-row">
      <div id="drum-names" className="flex flex-col">
        <p>Kick</p>
        <p>Snare</p>
        <p>Rim</p>
        <p>Hats Closed</p>
        <p>Hats Open</p>
        <p>Crash</p>
        <p>Ride</p>
        <p>Mounted Tom</p>
        <p>Floor Tom</p>
      </div>
      <div id="grid">
        {drums.map((drum, drumNumber) => (
          <div key={drumNumber} className="flex">
            {drum.map((step, stepNumber) => (
              <div
                key={stepNumber}
                onClick={() => stepClick(drumNumber, stepNumber)}
                className={`h-6 w-10 border border-teal-100  px-4 hover:bg-blue-700 ${drums[drumNumber][stepNumber] ? 'theme-bg-light-tan' : 'theme-bg-gray'} ${(stepNumber + 1) %
                  4 ===
                  0 && 'border-r-4'}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

DrumRoll.propTypes = {
  beatGrid: PropTypes.array,
  beatInst: PropTypes.object.isRequired,
  updateGrid: PropTypes.func.isRequired,
  gridUpdated: PropTypes.bool.isRequired,
  steps: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  beatInst: state.instrumentReducer.beatInst,
  gridUpdated: state.sectionsGridReducer.gridUpdated,
  steps: state.universalReducer.steps
});

export default connect(mapStateToProps, { beatGrid, updateGrid, numberOfSteps })(DrumRoll);
