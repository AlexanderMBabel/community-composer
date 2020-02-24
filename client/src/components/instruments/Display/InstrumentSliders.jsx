import React, { useState, useEffect } from 'react';
import Slider from '../../Slider/Slider';
import SliderOptions from '../../Slider/SliderOptions';
import { connect } from 'react-redux';
import { randomBgColorGenTailwind } from '../../../utils/randomBgColorGenTailwind';
import { tweekInstrument } from '../../../actions/instruments';
import PropTypes from 'prop-types';

const addToSettings = (values, initSettings) => {
  let settings = initSettings;
  let matchSetting = {};
  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      matchSetting = settings.settings.find((setting, index) => setting.name === key);
      matchSetting.default = values[key];
    }
  }
};

const InstrumentSliders = ({ tracks, selectedTrack, tweekInstrument }) => {
  const [sliderValues, setSliderValues] = useState({});
  const [changed, setChanged] = useState('');

  const settings = tracks[selectedTrack.position].settings.settings;

  useEffect(() => {
    console.log(changed);
    if (changed !== '') {
      tweekInstrument(selectedTrack.position, sliderValues[changed], changed);
    }
  }, [sliderValues, changed]);

  return (
    <div className="flex flex-wrap">
      {settings.map((setting, iter) => {
        if (setting.type === 'number') {
          return (
            <Slider
              key={setting.name}
              name={setting.name}
              sliderValues={sliderValues}
              setSliderValues={setSliderValues}
              min={setting.min}
              max={setting.max}
              initialValue={setting.default}
              type={setting.type}
              color={setting.color}
              group={setting.group}
              setChanged={setChanged}
            />
          );
        } else {
          return (
            <SliderOptions
              key={setting.name}
              name={setting.name}
              sliderValues={sliderValues}
              setSliderValues={setSliderValues}
              min={setting.min}
              max={setting.max}
              initialValue={0}
              type={setting.type}
              color={'bg-teal-700'}
              group={setting.group}
              setChanged={setChanged}
            />
          );
        }
      })}
    </div>
  );
};
InstrumentSliders.propTypes = {
  tracks: PropTypes.array,
  selectedTrack: PropTypes.object,
  tweekInstrument: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tracks: state.tracksReducer.tracks,
  selectedTrack: state.universalReducer.selectedTrack
});

export default connect(mapStateToProps, { tweekInstrument })(InstrumentSliders);
