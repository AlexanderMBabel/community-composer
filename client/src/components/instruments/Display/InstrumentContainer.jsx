import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaSlidersH } from 'react-icons/fa';
import InstrumentSliders from './InstrumentSliders';

const InstrumentContainer = ({ selectedTrack }) => {
  // dispaly state (min, default,sliders,full)
  const [display, setDisplay] = useState('default');

  let customStyles = {};
  switch (display) {
    case 'min':
      customStyles = { width: '10%', transform: 'rotate(-90deg)' };

      break;
    case 'default':
      customStyles = { width: '50%' };
      break;
    case 'sliders':
      customStyles = { width: '100%' };
      break;
    default:
      break;
  }

  const minimize = () => {
    if (display === 'default' || display === 'sliders') {
      setDisplay('min');
    } else {
      setDisplay('default');
    }
  };

  const sliders = () => {
    display === 'sliders' ? setDisplay('default') : setDisplay('sliders');
  };
  return (
    <div className={`${display === 'min' ? 'w-1/12 rotate-90' : display === 'default' ? 'w-2/4 rotate-90' : 'w-full rotate-90'}border-gray-900 shadow-inner bg-gray-700 h-56`}>
      <div id="top_bar" className="h-10 bg-gray-100 w-full flex justify-end items-center">
        <div>{selectedTrack.track.instrumentName}</div>
        <div className="flex ">
          <div className={`${display === 'sliders' ? 'text-blue-600' : 'text-black'} mx-2`} onClick={sliders}>
            <FaSlidersH />
          </div>
          <div className="mx-2 w" onClick={minimize}>
            {display === 'default' || display === 'sliders' ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
        </div>
      </div>
      <div className={`${display === 'min' && 'rotate-90'}`}>{selectedTrack.track.instrumentName}</div>
      <div className={`${display !== 'sliders' && 'hidden'}`}>
        <InstrumentSliders />
      </div>
    </div>
  );
};
InstrumentContainer.propTypes = {
  selectedTrack: PropTypes.object
};

const mapStateToProps = state => ({
  selectedTrack: state.universalReducer.selectedTrack
});

export default connect(mapStateToProps, {})(InstrumentContainer);
