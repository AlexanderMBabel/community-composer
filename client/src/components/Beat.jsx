import React from 'react';

import DrumRoll from './DrumRoll';
import Sampler from './instruments/Sampler';
import VelocitySliders from './VelocitySliders';

const Beat = () => {
  return (
    <div>
      <section className=" flex flex-wrap items-center justify-center flex-col">
        <div className="theme-bg-light-blue w-full my-10 flex items-center justify-center ">
          <div className="font-lato text-3xl font-bold">Beat</div>
        </div>

        <Sampler />
        <DrumRoll />
        <VelocitySliders section="beat" />
      </section>
    </div>
  );
};

export default Beat;
