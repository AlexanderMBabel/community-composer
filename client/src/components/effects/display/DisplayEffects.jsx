import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EffectContainer from './EffectContainer';

const DisplayEffects = ({ selectedTrack, tracks }) => {
  const effects = tracks[selectedTrack.position].effects;

  return (
    <div>
      <div>Effects</div>
      <div className="flex flex-wrap">
        {effects.map(effect => (
          <div className="w-1/4 px-2" key={effect.name}>
            <EffectContainer effectData={effect} />
          </div>
        ))}
      </div>
    </div>
  );
};

DisplayEffects.propTypes = {
  selectedTrack: PropTypes.object,
  tracks: PropTypes.array
};

const mapStateToProps = state => ({
  tracks: state.tracksReducer.tracks,
  selectedTrack: state.universalReducer.selectedTrack
});
export default connect(mapStateToProps)(DisplayEffects);
