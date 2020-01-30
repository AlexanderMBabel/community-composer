import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Tone from 'tone';
import gridToPlayableGrid from '../utils/gridToPlayableGrid';

import { MdPlayArrow, MdStop } from 'react-icons/md';
import { melodyGrid } from '../actions/grids';
import numberToNote from '../utils/numberToNote';
import { melodyInstrument } from '../actions/instruments';

const TransportControl = ({ melody, melodyInst, beat, beatInst, bass, bassInst }) => {
  const [currentInstrument, setCurrentistrument] = useState(null);
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

  console.log('bass', bass, 'melody', melody);
  // stops then starts tranport when sound changes are made
  useEffect(() => {
    let isPlaying = Tone.Transport.state;
    Tone.Transport.cancel();
    if (isPlaying === 'started') {
      Tone.Transport.start();
    }

    setCurrentistrument(melodyInstrument);
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
  }, [melody]);

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
      melodyInst.triggerAttackRelease(notes[0], 0);
    }
    if (playableBeat[step].length > 0) {
      let beats = playableBeat[step].map(note => numberToNote(note));

      beatInst.triggerAttack(beats);
    }
    if (playableBass[step].length > 0) {
      let bass = playableBass[step].map(note => numberToNote(note + 24));
      bassInst.triggerAttackRelease(bass[0], 0);
    }
    index++;
  };
  return (
    <div className="theme-bg-gray flex items-center justify-center">
      <div onClick={play} className="p-3 theme-bg-light-tan m-2 rounded-r-sm hover:bg-indigo-600 active:bg-green-200">
        <MdPlayArrow className=" " />
      </div>
      <div onClick={stop} className="p-3 theme-bg-light-tan m-2 rounded-sm hover:bg-indigo-600 active:bg-red-200">
        <MdStop />
      </div>
    </div>
  );
};

TransportControl.protoTypes = {
  melody: PropTypes.array.isRequired,
  beat: PropTypes.array.isRequired,
  bass: PropTypes.array.isRequired,
  melodyInst: PropTypes.object.isRequired,
  beatInst: PropTypes.object.isRequired,
  bassInst: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  state: state,
  melody: state.sectionsGridReducer.melodyGrid,
  beat: state.sectionsGridReducer.beatGrid,
  bass: state.sectionsGridReducer.bassGrid,
  melodyInst: state.instrumentReducer.melodyInst,
  beatInst: state.instrumentReducer.beatInst,
  bassInst: state.instrumentReducer.bassInst
});

export default connect(mapStateToProps)(TransportControl);
