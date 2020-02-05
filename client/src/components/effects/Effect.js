import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import AutoFilter from './AutoFilter';
import { effectOptions } from '../../utils/selectOptions';
import { FaPlus } from 'react-icons/fa';
import { melodyEffect1, melodyEffect2, beatEffect1, beatEffect2, bassEffect1, bassEffect2, chordEffect1, chordEffect2 } from '../../actions/effects';
import { updateGrid } from '../../actions/grids';
import PropTypes from 'prop-types';
import BitCrusher from './BitCrusher';
import AutoWah from './AutoWah';
import Distortion from './Distortion';
import Chorus from './Chorus';
const Effect = ({
  placement,
  section,
  melodyEffect1,
  melodyEffect2,
  beatEffect1,
  beatEffect2,
  bassEffect1,
  bassEffect2,
  chordEffect1,
  chordEffect2,
  updateGrid,
  gridIsUpdated
}) => {
  const [effectType, setEffectType] = useState('none');
  const [audioEffect, setAudioEffect] = useState(null);

  useEffect(() => {
    if (section === 'melody') {
      if (placement === 1) {
        melodyEffect1(audioEffect);
      }
      if (placement === 2) {
        melodyEffect2(audioEffect);
      }
    }
    if (section === 'beat') {
      if (placement === 1) {
        beatEffect1(audioEffect);
      }
      if (placement === 2) {
        beatEffect1(audioEffect);
      }
    }
    if (section === 'bass') {
      if (placement === 1) {
        bassEffect1(audioEffect);
      }
      if (placement === 2) {
        bassEffect2(audioEffect);
      }
    }
    if (section === 'chord') {
      if (placement === 1) {
        chordEffect1(audioEffect);
      }
      if (placement === 2) {
        chordEffect2(audioEffect);
      }
    }

    melodyEffect1(audioEffect);
    updateGrid(!gridIsUpdated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, audioEffect, melodyEffect1, melodyEffect2, beatEffect1, beatEffect2, bassEffect1, bassEffect2, chordEffect1, chordEffect2, placement]);

  const switchAudioEffect = () => {
    switch (effectType) {
      case 'none':
        return;
      case 'AutoFilter':
        return <AutoFilter setAudioEffect={setAudioEffect} />;
      case 'BitCrusher':
        return <BitCrusher setAudioEffect={setAudioEffect} />;
      case 'AutoWah':
        return <AutoWah setAudioEffect={setAudioEffect} />;
      case 'Distortion':
        return <Distortion setAudioEffect={setAudioEffect} />;
      case 'Chorus':
        return <Chorus setAudioEffect={setAudioEffect} />;
      default:
        return (
          <div className="flex w-full text-center h-full items-center jsutify-center">
            <FaPlus />
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      <Select
        options={effectOptions}
        defaultValue={effectOptions[0]}
        onChange={val => {
          setEffectType(val.value);
        }}
      />
      {switchAudioEffect()}
    </div>
  );
};

Effect.protoTypes = {
  melodyEffect1: PropTypes.func.isRequired,
  melodyEffect2: PropTypes.func.isRequired,
  beatEffect1: PropTypes.func.isRequired,
  beatEffect2: PropTypes.func.isRequired,
  bassEffect1: PropTypes.func.isRequired,
  bassEffect2: PropTypes.func.isRequired,
  chordEffect1: PropTypes.func.isRequired,
  chordEffect2: PropTypes.func.isRequired,
  gridIsUpdated: PropTypes.bool.isRequired,
  updateGrid: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gridIsUpdated: state.sectionsGridReducer.gridupdated
});
export default connect(mapStateToProps, { melodyEffect1, melodyEffect2, beatEffect1, beatEffect2, bassEffect1, bassEffect2, chordEffect1, chordEffect2, updateGrid })(Effect);
