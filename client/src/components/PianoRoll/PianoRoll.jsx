import React, { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import createInitialGrid from '../../utils/createInitialGrid';
// import playGrid from '../../utils/playGrid';
import numberToNote from '../../utils/numberToNote';

import { updateClipAction } from '../../actions/tracks';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// take in the tracks , selectedTrack.name and selectedClip.name to find the position of the current clip
const getClipPosition = (tracks, trackName, clipName) => {
  let trackPosition = 0;
  let clipPosition = 0;

  //Loop through tracks to find the iteration that track name == current track name
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].name === trackName) {
      trackPosition = i;
    }
  }

  // Loop through clips of matched track to match to current clip and assign clipPosition the position
  let clips = tracks[trackPosition].clips;
  for (let i = 0; i < clips.length; i++) {
    if (clips[i].name === clipName) {
      clipPosition = i;
    }
  }

  return { trackPosition, clipPosition };
};

// load instrument
const loadInstrument = (tracks, trackPosition) => {
  return tracks[trackPosition].instrument;
};

// load effects
const loadEffects = (tracks, trackPosition) => {
  return tracks[trackPosition].effects;
};

const PianoRoll = ({ updateClipAction, selectedClip, selectedTrack, updated, tracks }) => {
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
  const [notes, setNotes] = useState([]);

  const [showBlockValue, setShowBlockValue] = useState(false);
  const [position, setPosition] = useState(null);
  const [instrument, setInstrument] = useState(null);
  const [effects, setEffects] = useState(null);

  // update notes when current clip is loaded
  useEffect(() => {
    if (selectedClip !== null && tracks !== null) {
      setNotes(selectedClip.grid);

      setPosition(getClipPosition(tracks, selectedTrack.name, selectedClip.name));

      if (instrument === null && position !== null) {
        setInstrument(loadInstrument(tracks, position.trackPosition));
      }
      if (effects === null && position !== null) {
        setEffects(loadEffects(tracks, position.trackPosition));
      }
    }
  }, [updated]);

  // useEffect(() => {
  //   // create temp grid with if updated amount of steps

  //   const tempNotes = createInitialGrid(Number(steps), 24);

  //   // loop through tempnote notes
  //   for (let i = 0; i < tempNotes.length; i++) {
  //     // loop through steps for each note
  //     for (let y = 0; y < tempNotes[i].length; y++) {
  //       // note existed add to grid
  //       if (typeof notes[i][y] !== 'undefined') {
  //         tempNotes[i][y] = notes[i][y];
  //       }
  //     }
  //   }

  //   // set notes state
  //   setNotes(tempNotes);
  //   //update grid depending on section
  //   if (section === 'melody') {
  //     melodyGrid(notes);
  //   }
  //   if (section === 'bass') {
  //     bassGrid(notes);
  //   }
  // }, [steps]);

  //Show the note name in MIDI format
  const showNote = (number, step) => {
    setNoteName(numberToNote(number));
  };

  // function plays note, takes in instrument and an effects array
  const playNote = (instrument, effects, note) => {
    // if instrument is loaded
    if (instrument !== null) {
      // if there are effects add connect them
      effects.length > 0 ? instrument.connect(effects).triggerAttack(numberToNote(note)) : instrument.triggerAttack(numberToNote(note));
    }
  };

  // Handle clicking on a step
  const stepClick = (note, step, stepValue) => {
    let tempNotes = notes;

    //play note
    playNote(instrument, effects, note);

    tempNotes[note][step] = !tempNotes[note][step];
    setNotes(tempNotes);
    updateClipAction({ ...selectedClip, grid: notes }, position);

    setShowBlockValue(!showBlockValue);
  };

  // console.log(position);
  // console.log(instrument);
  // console.log(effects);

  const instrumentGrid = () => {
    return (
      <div className="flex">
        <div>
          {coloredKeyArray.map((color, iter) => {
            if (color === 'w') {
              return <div key={iter} className="bg-white h-5 w-5"></div>;
            }
            if (color === 'b') {
              return <div key={iter} className="bg-black h-5 w-5"></div>;
            }
          })}
        </div>
        <div>
          {selectedClip !== {} &&
            notes.map((note, noteNumber) => (
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
      </div>
    );
  };

  const beatGrid = () => {
    return (
      <div className="flex flex-row">
        <div id="drum-names" className="flex flex-col">
          <p>Kick</p>
          <p>Snare</p>
          <p>Rim</p>
          <p>Hats Closed</p>
          <p>Hats Open</p>
          <p>Crash</p>
          <p>Ride</p>
          <p>Mounted Tom</p>
          <p>Floor Tom</p>
        </div>
        <div id="grid">
          {notes.map((drum, drumNumber) => (
            <div key={drumNumber} className="flex">
              {drum.map((step, stepNumber) => (
                <div
                  key={stepNumber}
                  onClick={() => stepClick(drumNumber, stepNumber)}
                  className={`h-6 w-10 border border-teal-100  px-4 hover:bg-blue-700 ${notes[drumNumber][stepNumber] ? 'theme-bg-light-tan' : 'theme-bg-gray'} ${(stepNumber + 1) %
                    4 ===
                    0 && 'border-r-4'}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Scrollbars style={{ width: '1000px', height: '300px' }}>
        <section id="grid" className="mx-auto container mt-5 flex">
          {selectedTrack.type === 'instrument' || (selectedTrack.type === 'chord' && instrumentGrid())}
          {selectedTrack.type === 'beats' && beatGrid()}
        </section>
      </Scrollbars>
      <div>{noteName}</div>
      <div>{showBlockValue}</div>
    </div>
  );
};

PianoRoll.propTypes = {
  selectedTrack: PropTypes.object.isRequired,
  updated: PropTypes.bool.isRequired,
  updateClipAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedClip: state.universalReducer.selectedClip,
  selectedTrack: state.universalReducer.selectedTrack,
  updated: state.universalReducer.updated,
  tracks: state.tracksReducer.tracks
});

export default connect(mapStateToProps, { updateClipAction })(PianoRoll);
