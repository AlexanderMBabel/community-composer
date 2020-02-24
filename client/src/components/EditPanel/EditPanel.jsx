import React, { useState } from 'react';
import { connect } from 'react-redux';
import InstrumentToggle from './InstrumentToggle';
import PropTypes from 'prop-types';
import PianoRoll from '../PianoRoll/PianoRoll';
import InstrumentPanel from './InstrumentPanel';

// Bottom Panel used to control instruments and edit piano roll

const EditPanel = ({ selectedTrack, selectedClip }) => {
  const [noteOrInst, setNoteOrInst] = useState('note');
  return (
    <div className="w-full bg-gray-300 border-2 rounded shadow-inner border-gray-100 m-2 " style={{ height: '35vh' }}>
      <InstrumentToggle setNoteOrInst={setNoteOrInst} />
      {selectedTrack.type === 'audio' ? (
        <div className="w-4/5 h-56">Edit Wave</div>
      ) : (
        <div className="flex items-center justify-center">{noteOrInst === 'note' ? <PianoRoll /> : <InstrumentPanel />}</div>
      )}
    </div>
  );
};

EditPanel.propTypes = {
  selectedTrack: PropTypes.object,
  selectedClip: PropTypes.object
};
const mapStateToProps = state => ({
  selectedTrack: state.universalReducer.selectedTrack,
  selectedClip: state.universalReducer.selectedClip
});
export default connect(mapStateToProps)(EditPanel);
