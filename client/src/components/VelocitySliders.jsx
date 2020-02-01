import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider, { Range } from 'rc-slider';
import { melodyVel, bassVel, beatVel } from '../actions/velocity';
import 'rc-slider/assets/index.css';

const VelocitySliders = ({ numberOfSteps, section }) => {
  console.log(numberOfSteps);
  const [stepsArr, setStepsArr] = useState(new Array(numberOfSteps).fill(0));

  switch (section) {
    case 'melody':
      melodyVel(stepsArr);
      break;
    case 'bass':
      bassVel(stepsArr);
      break;
    case 'beat':
      beatVel(stepsArr);
      break;
    default:
      break;
  }

  return (
    <div>
      <p className="text-gray-800 text-2xl text-center">Velocity</p>
      <div className="flex flex-row">
        {stepsArr.map((step, stepIter) => (
          <div className="" style={{ height: '10vh' }}>
            <Slider
              style={{ padding: '0px 19px 0px 19px' }}
              vertical={true}
              onChange={val => {
                let tempSteps = stepsArr;
                tempSteps[stepIter] = val;
                setStepsArr(tempSteps);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

VelocitySliders.prototype = {
  numberOfSteps: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  numberOfSteps: state.universalReducer.steps
});

export default connect(mapStateToProps)(VelocitySliders);
