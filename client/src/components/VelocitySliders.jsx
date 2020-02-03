import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { melodyVel, bassVel, beatVel } from '../actions/velocity';
import 'rc-slider/assets/index.css';

const VelocitySliders = ({ numberOfSteps, section, melodyVel, bassVel, beatVel }) => {
  const [stepsArr, setStepsArr] = useState(new Array(numberOfSteps).fill(1));

  useEffect(() => {
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
  }, [stepsArr, bassVel, beatVel, melodyVel, section]);

  return (
    <div>
      <p className="text-gray-800 text-2xl text-center">Velocity</p>
      <div className="flex flex-row">
        {stepsArr.map((step, stepIter) => (
          <div key={stepIter} className="" style={{ height: '10vh' }}>
            <Slider
              style={{ padding: '0px 19px 0px 19px' }}
              vertical={true}
              onChange={val => {
                let tempSteps = stepsArr;
                tempSteps[stepIter] = val;
                setStepsArr(tempSteps);
              }}
              max={1}
              min={0}
              step={0.1}
              defaultValue={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

VelocitySliders.prototype = {
  numberOfSteps: PropTypes.number.isRequired,
  melodyVel: PropTypes.func.isRequired,
  beatVel: PropTypes.func.isRequired,
  bassVel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  numberOfSteps: state.universalReducer.steps
});

export default connect(mapStateToProps, { melodyVel, beatVel, bassVel })(VelocitySliders);
