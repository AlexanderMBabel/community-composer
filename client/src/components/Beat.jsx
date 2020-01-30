import React from 'react';

import DrumRoll from './DrumRoll';
import Sampler from './instruments/Sampler';

const Beat = () => {
  return (
    <div>
      <section className="theme-bg-maroon flex flex-wrap items-center justify-center flex-col">
        <div className="font-bangers text-4xl font-bold">Beat</div>

        <Sampler />
        <DrumRoll />
      </section>
    </div>
  );
};

export default Beat;
