import React from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import Instrument from './Instrument';

const Bass = () => {
  return (
    <div>
      <section className="theme-bg-light-blue flex flex-wrap items-center justify-center flex-col">
        <div className="font-bangers text-4xl font-bold">Bass</div>
        <Instrument section="bass" />
        <PianoRoll section="bass" />
      </section>
    </div>
  );
};

export default Bass;
