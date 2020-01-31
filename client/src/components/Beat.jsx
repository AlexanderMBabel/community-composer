import React from 'react';

import DrumRoll from './DrumRoll';
import Sampler from './instruments/Sampler';

const Beat = () => {
  return (
    <div>
      <section className=" flex flex-wrap items-center justify-center flex-col">
        <div className="theme-bg-light-blue w-full my-10 flex items-center justify-center ">
          <div className="font-bangers text-4xl font-bold">Beat</div>
        </div>

        <Sampler />
        <DrumRoll />
      </section>
    </div>
  );
};

export default Beat;
