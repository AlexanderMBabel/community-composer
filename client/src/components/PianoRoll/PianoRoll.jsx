import React, { useState } from 'react';
import * as Tone from 'tone';
import { Scrollbars } from 'react-custom-scrollbars';
import createInitialGrid from '../../utils/createInitialGrid';
import playGrid from '../../utils/playGrid';
import numberToNote from '../../utils/numberToNote';
import { melodyGrid } from '../../actions/grids';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const synth = new Tone.FMSynth().toMaster();

const PianoRoll = ({ instrument, setGrid, melodyGrid }) => {
  const [noteName, setNoteName] = useState('');
  const [notes, setNotes] = useState(createInitialGrid());
  const [showBlockValue, setShowBlockValue] = useState(false);

  const showNote = (number, step) => {
    setNoteName(numberToNote(number));
  };

  const stepClick = (note, step, stepValue) => {
    let tempNotes = notes;
    instrument.triggerAttackRelease(numberToNote(note), 0.5);

    tempNotes[note][step] = !tempNotes[note][step];

    setNotes(tempNotes);
    setGrid(notes);
    melodyGrid(notes);

    setShowBlockValue(!showBlockValue);
  };

  return (
    <div>
      <Scrollbars style={{ width: '900px', height: '300px' }}>
        <section id="grid" className="mx-auto container mt-5">
          {notes.map((note, noteNumber) => (
            <div key={noteNumber} className="flex">
              {note.map((step, stepNumber) => (
                <div
                  key={stepNumber}
                  className={`h-5 w-10 border border-teal-400 bg-gray-200 px-4 hover:bg-orange-200 ${notes[noteNumber][stepNumber] ? 'bg-red-500' : 'bg-red-200'}`}
                  onMouseOver={() => showNote(noteNumber, stepNumber)}
                  onClick={() => stepClick(noteNumber, stepNumber, step)}
                >
                  {note}
                </div>
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
  melodyGrid: PropTypes.func
};

export default connect(null, { melodyGrid })(PianoRoll);
