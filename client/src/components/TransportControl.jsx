import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Tone from 'tone';
import gridToPlayableGrid from '../utils/gridToPlayableGrid';

import { MdPlayArrow, MdStop } from 'react-icons/md';

import numberToNote from '../utils/numberToNote';

const TransportControl = ({ melody, melodyInst, melodyVel, beat, beatInst, beatVel, bass, bassInst, bassVel, chords, chordInst, chordVel, gridIsUpdated }) => {
  //   const [currentMelody, setCurrentMelody] = useState(null)

  let index = 0;
  // **TODO** get number of steps from redux
  const NumberOfSteps = 24;
  let playableMelody = gridToPlayableGrid(melody);
  let playableBeat = gridToPlayableGrid(beat);
  let playableBass = gridToPlayableGrid(bass);

  // console.log('melody', playableMelody, 'beats', playableBeat);
  // initialize Tones tranport to repeat
  Tone.Transport.scheduleRepeat(time => {
    repeat(time);
  }, '8n');

  // console.log('bass', bass, 'melody', melody, 'chord', chords);
  // stops then starts tranport when sound changes are made
  useEffect(() => {
    let isPlaying = Tone.Transport.state;
    Tone.Transport.cancel();
    if (isPlaying === 'started') {
      Tone.Transport.start();
    }
  }, [melodyInst]);

  /* stops then starts transport when grid changes are made
     prevents stacking play loop 
  */
  useEffect(() => {
    let isPlaying = Tone.Transport.state;

    Tone.Transport.cancel();
    if (isPlaying === 'started') {
      play();
    }
  }, [melody, chords, bass, melodyInst, bassInst, gridIsUpdated]);

  // start loop
  const play = () => {
    Tone.Transport.scheduleRepeat(time => {
      repeat(time);
    }, '8n');
    Tone.Transport.start();
  };

  // Stop Loop
  const stop = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
  };

  // reapeat function used in scheduleRepeat
  // loops number of steps and plays a
  const repeat = time => {
    let step = index % NumberOfSteps;
    //melody section
    if (playableMelody[step].length > 0) {
      let notes = playableMelody[step].map(note => numberToNote(note));
      melodyInst.triggerAttackRelease(notes[0], '8n', '+0', melodyVel[step]);
    }
    if (playableBeat[step].length > 0) {
      let beats = playableBeat[step].map(note => numberToNote(note));

      beatInst.triggerAttack(beats, '+0', beatVel[step]);
    }
    if (playableBass[step].length > 0) {
      let bass = playableBass[step].map(note => numberToNote(note + 24));
      bassInst.triggerAttackRelease(bass[0], '8n', '+0', bassVel[step]);
    }

    if (chords[step].length > 0) {
      chordInst.triggerAttackRelease(chords[step], '8n');
    }
    index++;
  };
  return (
    <div className="theme-bg-gray  flex items-center justify-center relative" style={{ height: '10vh' }}>
      <div className="absolute top-0 left-0">
        <div className="text-gray-100 font-bangers text-4xl mt-3 ml-5">CC</div>
        <div className="text-gray-100">Community Composer</div>
      </div>
      <div onClick={play} className="p-3 theme-bg-light-blue m-2 border rounded-r-sm hover:bg-blue-600 active:bg-green-200">
        <MdPlayArrow className=" " />
      </div>
      <div onClick={stop} className="p-3 theme-bg-light-blue border m-2 rounded-sm hover:bg-blue-600 active:bg-red-200">
        <MdStop />
      </div>
    </div>
  );
};

TransportControl.protoTypes = {
  melody: PropTypes.array.isRequired,
  beat: PropTypes.array.isRequired,
  bass: PropTypes.array.isRequired,
  chords: PropTypes.array.isRequired,
  melodyInst: PropTypes.object.isRequired,
  beatInst: PropTypes.object.isRequired,
  bassInst: PropTypes.object.isRequired,
  chordInst: PropTypes.object.isRequired,
  melodyVel: PropTypes.array.isRequired,
  beatVel: PropTypes.array.isRequired,
  bassVel: PropTypes.array.isRequired,
  chordVel: PropTypes.array.isRequired,
  gridIsUpdated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  state: state,
  melody: state.sectionsGridReducer.melodyGrid,
  beat: state.sectionsGridReducer.beatGrid,
  bass: state.sectionsGridReducer.bassGrid,
  chords: state.sectionsGridReducer.chordGrid,
  melodyInst: state.instrumentReducer.melodyInst,
  beatInst: state.instrumentReducer.beatInst,
  bassInst: state.instrumentReducer.bassInst,
  chordInst: state.instrumentReducer.chordInst,
  melodyVel: state.velocityReducer.melodyVel,
  beatVel: state.velocityReducer.beatVel,
  bassVel: state.velocityReducer.bassVel,
  chordVel: state.velocityReducer.chordVel,
  gridIsUpdated: state.sectionsGridReducer.gridUpdated
});

export default connect(mapStateToProps)(TransportControl);
