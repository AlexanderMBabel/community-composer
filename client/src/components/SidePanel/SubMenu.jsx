import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import { FaRegWindowMaximize } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import * as Tone from 'tone';
import { addInstrumentAction } from '../../actions/instruments';

import SubMenuItem from './SubMenuItem';
import { instrumentOptions } from '../../utils/selectOptions';
import { selectedMenuItem, selectedTrack } from '../../actions/selected';
import PropTypes from 'prop-types';
import { findPosition } from '../../utils/findPosition';
import { addClipAction } from '../../actions/tracks';

const dummyMenuItems = ['Sampler', 'FMSynth', 'PolySynth', 'Massivish', 'DuoSynth', 'Pluck', 'Simple', 'Twin', 'Stepper', 'Generated'];

const instrumentItems = [
  { type: 'instrument', name: 'Sampler' },
  { type: 'instrument', name: 'FMSynth' },
  { type: 'instrument', name: 'DuoSynth' },
  { type: 'instrument', name: 'Pluck' }
];
const soundItems = [
  { type: 'sound', name: 'kick' },
  { type: 'sound', name: 'guitar' }
];
const drums = [
  { type: 'drum', name: 'Electro' },
  { type: 'drum', name: 'elctro synths' },
  { type: 'drum', name: 'acoustic' }
];
const audioEffects = [
  { type: 'effect', name: 'reverb' },
  { type: 'effect', name: 'distortion' },
  { type: 'effect', name: 'delay' },
  { type: 'effect', name: 'chorus' },
  { type: 'effect', name: 'bitcrusher' }
];
const midiEffects = [
  { type: 'midiEffect', name: 'stutter' },
  { type: 'midiEffect', name: 'randomizer' },
  { type: 'midiEffect', name: 'scales' },
  { type: 'midiEffect', name: 'pitch' }
];
const SubMenu = ({ selectedMenuItem, addInstrumentAction, selectedTrack, tracks }) => {
  const [submenu, setSubmenu] = useState([]);
  const [errors, setErrors] = useState([]);
  const [position, setPosition] = useState(null);

  const selectSubMenuItems = item => {
    switch (item) {
      case 'Sounds':
        setSubmenu(soundItems);
        break;
      case 'Drums':
        setSubmenu(drums);
        break;
      case 'Instruments':
        setSubmenu(instrumentItems);
        break;
      case 'Audio Effects':
        setSubmenu(audioEffects);
        break;
      case 'Midi Effects':
        setSubmenu(midiEffects);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (selectedTrack.name !== null) {
      setPosition(findPosition(tracks, selectedTrack.name));
    }
  }, [selectedTrack.name]);

  useEffect(() => {
    selectSubMenuItems(selectedMenuItem);
  }, [selectedMenuItem]);

  const handleClick = e => {
    const name = e.currentTarget.dataset.name;
    const type = e.currentTarget.dataset.type;

    console.log(name);

    if (selectedTrack.name !== null) {
      console.log(type);
      if (type === 'instrument') {
        addInstrumentAction(name, position.track);
      }
    } else {
      setErrors([...errors, 'select a track then click an instrument or drag instrument to track']);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gray-600 border-gray-100 border-2 border-l-0 rounded rounded-l-none rounded-t-none">
        <div className="flex bg-gray-600 justify-between  ">
          <div className="text-sm">Name</div>
          <div className="mr-10">
            <IoIosArrowUp />
          </div>
        </div>
        <Scrollbars autoHeight>
          <div className="bg-gray-300"></div>
          {submenu.map((item, iter) => (
            <div onClick={handleClick} data-name={item.name} data-type={item.type} key={item.name} className={`${iter % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
              <SubMenuItem key={item.name} name={item.name} />
            </div>
          ))}
          {errors.map(error => (
            <div>{error}</div>
          ))}
        </Scrollbars>
      </section>
    </div>
  );
};

SubMenu.propTypes = {
  addInstrumentAction: PropTypes.func.isRequired,
  selectedTrack: PropTypes.object.isRequired,
  selectedMenuItem: PropTypes.string
};

const mapStateToProps = state => ({
  selectedMenuItem: state.universalReducer.selectedMenuItem,
  selectedTrack: state.universalReducer.selectedTrack,
  tracks: state.tracksReducer.tracks
});
export default connect(mapStateToProps, { addInstrumentAction })(SubMenu);
