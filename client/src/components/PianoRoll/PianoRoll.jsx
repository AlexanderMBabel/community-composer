import React, { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import createInitialGrid from '../../utils/createInitialGrid';
// import playGrid from '../../utils/playGrid';
import numberToNote from '../../utils/numberToNote';
import { melodyGrid, bassGrid, updateGrid } from '../../actions/grids';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PianoRoll = ({ steps, melodyGrid, melodyInst, melodyEffect1, bassGrid, bassInst, section, updateGrid, gridIsUpdated }) => {
  // create array of octave
  const numberOfNotes = new Array(12).fill('');

  // fill octave array with key color denoted by 'b' or 'w'

  const keyColor = notesArray => {
    let coloredArray = notesArray.map((notes, iter) => {
      if (iter < 7) {
        if (iter % 2 === 0) {
          return 'w';
        } else {
          return 'b';
        }
      }
      if (iter > 6) {
        if (iter % 2 === 0) {
          return 'b';
        } else {
          return 'w';
        }
      }
    });
    return coloredArray;
  };

  let coloredKeyArray = keyColor(numberOfNotes);
  coloredKeyArray = [...coloredKeyArray, ...coloredKeyArray];

  const [noteName, setNoteName] = useState('');
  const [notes, setNotes] = useState(createInitialGrid(Number(steps), 24));

  const [showBlockValue, setShowBlockValue] = useState(false);

  useEffect(() => {
    // create temp grid with if updated amount of steps

    const tempNotes = createInitialGrid(Number(steps), 24);

    // loop through tempnote notes
    for (let i = 0; i < tempNotes.length; i++) {
      // loop through steps for each note
      for (let y = 0; y < tempNotes[i].length; y++) {
        // note existed add to grid
        if (typeof notes[i][y] !== 'undefined') {
          tempNotes[i][y] = notes[i][y];
        }
      }
    }

    // set notes state
    setNotes(tempNotes);
    //update grid depending on section
    if (section === 'melody') {
      melodyGrid(notes);
    }
    if (section === 'bass') {
      bassGrid(notes);
    }
  }, [steps]);

  const showNote = (number, step) => {
    setNoteName(numberToNote(number));
  };

  const stepClick = (note, step, stepValue) => {
    let tempNotes = notes;

    if (section === 'melody') {
      melodyEffect1 ? melodyInst.connect(melodyEffect1, null).triggerAttackRelease(numberToNote(note), 0.5) : melodyInst.triggerAttackRelease(numberToNote(note), 0.5);
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
        <section id="grid" className="mx-auto container mt-5 flex">
          <div>
            {coloredKeyArray.map(color => {
              if (color === 'w') {
                return <div className="bg-white h-5 w-5"></div>;
              }
              if (color === 'b') {
                return <div className="bg-black h-5 w-5"></div>;
              }
            })}
          </div>
          <div>
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
          </div>
        </section>
      </Scrollbars>
      <div>{noteName}</div>
      <div>{showBlockValue}</div>
    </div>
  );
};

PianoRoll.propTypes = {
  melodyGrid: PropTypes.func,
  melodyInst: PropTypes.object.isRequired,
  bassGrid: PropTypes.func.isRequired,
  bassInst: PropTypes.object.isRequired,
  updateGrid: PropTypes.func.isRequired,
  gridIsUpdated: PropTypes.bool.isRequired,
  steps: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  melodyInst: state.instrumentReducer.melodyInst,
  bassInst: state.instrumentReducer.bassInst,
  gridIsUpdated: state.sectionsGridReducer.gridUpdated,
  melodyEffect1: state.audioEffectReducer.melodyEffect1,
  steps: state.universalReducer.steps
});

export default connect(mapStateToProps, { melodyGrid, bassGrid, updateGrid })(PianoRoll);
