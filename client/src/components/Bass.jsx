import React from 'react';
import PianoRoll from './PianoRoll/PianoRoll';
import Instrument from './Instrument';
import VelocitySliders from './VelocitySliders';
import Effects from './effects/Effects';
import ChooseInstrument from './ChooseInstrument';

const Bass = () => {
  return (
    <div>
      <section className=" flex flex-wrap items-center justify-center flex-col">
        <div className="font-lato text-3xl font-bold theme-bg-faded-red w-full text-center my-5">Bass</div>
        <ChooseInstrument section="bass" />
        <Effects section="bass" />
        <PianoRoll section="bass" />
        <VelocitySliders sctions="bass" />
      </section>
    </div>
  );
};

export default Bass;
