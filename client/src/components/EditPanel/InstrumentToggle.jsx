import React from 'react';

const InstrumentToggle = ({ setNoteOrInst }) => {
  return (
    <div>
      <div className="flex">
        <div onClick={() => setNoteOrInst('inst')} className="rounded-full rounded-t-none rounded-r-none bg-orange-300 pr-2 pl-5 text-sm">
          Instrument
        </div>
        <div onClick={() => setNoteOrInst('note')} className="rounded-full rounded-t-none rounded-l-none bg-blue-400 pl-2 pr-5 text-sm">
          Notes
        </div>
      </div>
    </div>
  );
};

export default InstrumentToggle;
