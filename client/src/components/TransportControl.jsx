import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Tone from 'tone';
import gridToPlayableGrid from '../utils/gridToPlayableGrid';

import { MdPlayArrow, MdStop } from 'react-icons/md';
import { numberOfSteps } from '../actions/numberOfSteps';

import numberToNote from '../utils/numberToNote';
import { melodyEffect1, melodyEffect2, beatEffect1, beatEffect2, bassEffect1, bassEffect2, chordEffect1, chordEffect2 } from '../actions/effects';

const TransportControl = ({
  melody,
  melodyInst,
  melodyVel,
  melodyEffect1,
  melodyEffect2,
  beatEffect1,
  beatEffect2,
  bassEffect1,
  bassEffect2,
  chordEffect1,
  chordEffect2,
  beat,
  beatInst,
  beatVel,
  bass,
  bassInst,
  bassVel,
  chords,
  chordInst,
  chordVel,
  gridIsUpdated,
  countSteps,
  numberOfSteps
}) => {
  const [bpm, setBpm] = useState(120);
  const [swing, setSwing] = useState(0);

  let index = 0;
  // **TODO** get number of steps from redux
  const NumberOfSteps = countSteps;
  let playableMelody = gridToPlayableGrid(melody);
  let playableBeat = gridToPlayableGrid(beat);
  let playableBass = gridToPlayableGrid(bass);

  // initialize Tone Transport instance with options

  // initialize Tone scheduleRepeat
  Tone.Transport.scheduleRepeat(time => {
    repeat(time);
  }, '8n');

  Tone.Transport.bpm.value = bpm;

  // console.log('bass', bass, 'melody', melody, 'chord', chords);
  // stops then starts tranport when sound changes are made
  useEffect(() => {
    let isPlaying = Tone.Transport.state;
    Tone.Transport.cancel();
    if (isPlaying === 'started') {
      Tone.Transport.start();
    }
  }, []);

  /* stops then starts transport when grid changes are made
     prevents stacking play loop 
  */
  useEffect(() => {
    let isPlaying = Tone.Transport.state;

    Tone.Transport.cancel();
    if (isPlaying === 'started') {
      play();
    }
  }, [
    swing,
    melody,
    chords,
    bass,
    melodyInst,
    bassInst,
    gridIsUpdated,
    melodyEffect1,
    melodyEffect2,
    bassEffect1,
    bassEffect2,
    beatEffect1,
    beatEffect2,
    chordEffect1,
    chordEffect2,
    bpm
  ]);

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
      melodyEffect1
        ? melodyInst.connect(melodyEffect1, melodyEffect2).triggerAttackRelease(notes[0], '8n', '+0', melodyVel[step])
        : melodyInst.triggerAttackRelease(notes[0], '8n', '+0', melodyVel[step]);
    }
    if (playableBeat[step].length > 0) {
      let beats = playableBeat[step].map(note => numberToNote(note));
      beatEffect1 ? beatInst.connect(beatEffect1, beatEffect2).triggerAttack(beats, '+0', beatVel[step]) : beatInst.triggerAttack(beats, '+0', beatVel[step]);
    }
    if (playableBass[step].length > 0) {
      let bass = playableBass[step].map(note => numberToNote(note + 24));
      bassEffect1
        ? bassInst.connect(bassEffect1, bassEffect2).triggerAttackRelease(bass[0], '8n', '+0', bassVel[step])
        : bassInst.triggerAttackRelease(bass[0], '8n', '+0', bassVel[step]);
    }

    if (chords[step].length > 0) {
      chordEffect1 ? chordInst.connect(chordEffect1, chordEffect2).triggerAttackRelease(chords[step], '8n') : chordInst.triggerAttackRelease(chords[step], '8n');
    }
    index++;
  };

  // Bpm Change handler
  const changeBpm = e => {
    if (e.target.value > 0 && e.target.value < 300) {
      setBpm(e.target.value);
    }
  };

  //Swing Change Handler
  const changeSwing = e => {
    setSwing(e.target.value);
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
      <div>
        <p className="text-gray-200">BPM</p>
        <input className="w-1/4" type="number" value={bpm} onChange={changeBpm} />
      </div>
      <div>
        <p className="text-gray-200">Swing</p>
        <input className="w-1/4" type="number" value={swing} min="0" step="0.01" onChange={changeSwing} />
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
  gridIsUpdated: PropTypes.bool.isRequired,
  melodyEffect1: PropTypes.object.isRequired,
  melodyEffect2: PropTypes.object.isRequired
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
  gridIsUpdated: state.sectionsGridReducer.gridUpdated,
  melodyEffect1: state.audioEffectReducer.melodyEffect1,
  melodyEffect2: state.audioEffectReducer.melodyEffect2,
  beatEffect1: state.audioEffectReducer.beatEffect1,
  beatEffect2: state.audioEffectReducer.beatEffect2,
  bassEffect1: state.audioEffectReducer.bassEffect1,
  bassEffect2: state.audioEffectReducer.bassEffect2,
  chordEffect1: state.audioEffectReducer.chordEffect1,
  chordEffect2: state.audioEffectReducer.chordEffect2,
  countSteps: state.universalReducer.steps
});

export default connect(mapStateToProps, { numberOfSteps })(TransportControl);
