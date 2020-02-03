import React, { useState } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import createInitialGrid from '../../utils/createInitialGrid';
// import playGrid from '../../utils/playGrid';
import numberToNote from '../../utils/numberToNote';
import { melodyGrid, bassGrid, updateGrid } from '../../actions/grids';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const synth = new Tone.FMSynth().toMaster();

const PianoRoll = ({ melodyGrid, melodyInst, bassGrid, bassInst, section, updateGrid, gridIsUpdated }) => {
  const [noteName, setNoteName] = useState('');
  const [notes, setNotes] = useState(createInitialGrid(24, 24));

  const [showBlockValue, setShowBlockValue] = useState(false);

  const showNote = (number, step) => {
    setNoteName(numberToNote(number));
  };

  const stepClick = (note, step, stepValue) => {
    let tempNotes = notes;

    if (section === 'melody') {
      melodyInst.triggerAttackRelease(numberToNote(note), 0.5);
      tempNotes[note][step] = !tempNotes[note][step];

      setNotes(tempNotes);

      melodyGrid(notes);
    }
    if (section === 'bass') {
      bassInst.triggerAttackRelease(numberToNote(note + 24), 0.5);
      tempNotes[note][step] = !tempNotes[note][step];

      setNotes(tempNotes);

      bassGrid(notes);
    }
    updateGrid(!gridIsUpdated);
    setShowBlockValue(!showBlockValue);
  };

  return (
    <div>
      <Scrollbars style={{ width: '900px', height: '300px' }}>
        <section id="grid" className="mx-auto container mt-5">
          {/* <div className=" flex flex-row">
            {notes[0].map((steps, stepNumber) => (
              <div style={{ margin: '15px' }}>{stepNumber + 1}</div>
            ))}
          </div> */}
          {notes.map((note, noteNumber) => (
            <div key={noteNumber} className="flex">
              {note.map((step, stepNumber) => (
                <div
                  key={stepNumber}
                  className={`h-5 w-10 border border-gray-200 bg-gray-200 px-4 hover:bg-orange-200 ${
                    notes[noteNumber][stepNumber] ? 'theme-bg-light-tan' : 'theme-bg-gray'
                  } ${(stepNumber + 1) % 4 === 0 && 'border-r-4 '}`}
                  onMouseOver={() => showNote(noteNumber, stepNumber)}
                  onClick={() => stepClick(noteNumber, stepNumber, step)}
                ></div>
              ))}
            </div>
          ))}
        </section>
      </Scrollbars>
      <div>{noteName}</div>
      <div>{showBlockValue}</div>
    </div>
  );
};

PianoRoll.protoTypes = {
  melodyGrid: PropTypes.func,
  melodyInst: PropTypes.object.isRequired,
  bassGrid: PropTypes.func.isRequired,
  bassInst: PropTypes.object.isRequired,
  updateGrid: PropTypes.func.isRequired,
  gridIsUpdated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  melodyInst: state.instrumentReducer.melodyInst,
  bassInst: state.instrumentReducer.bassInst,
  gridIsUpdated: state.sectionsGridReducer.gridUpdated
});

export default connect(mapStateToProps, { melodyGrid, bassGrid, updateGrid })(PianoRoll);
