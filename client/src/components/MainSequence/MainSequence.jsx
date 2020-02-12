import React from 'react';
import Scrollbars, { ScrollBar } from 'react-custom-scrollbars';
import Track from './Track';

const dummyTracks = [
  { name: 'Melody', type: 'Midi', instrument: 'FMSynth', effects: ['Distortion', 'Reverb'], color: 'bg-red-300', output: 'Master', input: 'Keyboard' },
  { name: 'Drums', type: 'Midi', instrument: 'DrumMachine', effects: ['Distortion', 'Reverb'], color: 'bg-pink-300', output: 'Master', input: 'Keyboard' },
  { name: 'Voice', type: 'Audio', instrument: 'Audio', effects: ['Distortion', 'Reverb'], color: 'bg-blue-300', output: 'Master', input: 'Input 1' }
];

const MainSequence = () => {
  return (
    <div className="w-4/5" style={{ height: '70vh' }}>
      <section className="rounded border-2 border-gray-100 bg-gray-300 mx-2 h-full">
        <Scrollbars autoHeight>
          <div>
            {dummyTracks.map(track => (
              <Track trackInfo={track} />
            ))}
          </div>
        </Scrollbars>
      </section>
    </div>
  );
};

export default MainSequence;
