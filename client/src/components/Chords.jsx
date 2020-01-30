import React from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import Instrument from './Instrument';

const Chords = () => {
  return (
    <div>
      <section className="bg-indigo-400 flex flex-wrap items-center justify-center flex-col">
        <div className="font-bangers text-4xl font-bold">Chord Progression</div>
        <Instrument section="chord" />
      </section>
    </div>
  );
};

export default Chords;
