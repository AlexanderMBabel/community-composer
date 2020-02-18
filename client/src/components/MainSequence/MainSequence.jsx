import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Track from './Track';
import SequenceContextMenu from '../ContextMenu/SeqenceContextMenu';

import { MenuProvider, Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import TrackContextMenu from '../ContextMenu/TrackContextMenu';
import AddTrack from './AddTrack';

const dummyTracks = [
  { name: 'Melody', type: 'Midi', instrument: 'FMSynth', effects: ['Distortion', 'Reverb'], color: 'bg-red-300', output: 'Master', input: 'Keyboard' },
  { name: 'Drums', type: 'Midi', instrument: 'DrumMachine', effects: ['Distortion', 'Reverb'], color: 'bg-pink-300', output: 'Master', input: 'Keyboard' },
  { name: 'Voice', type: 'Audio', instrument: 'Audio', effects: ['Distortion', 'Reverb'], color: 'bg-blue-300', output: 'Master', input: 'Input 1' }
];

const MainSequence = () => {
  const [context, setContext] = useState(false);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [displayAdd, setDisplayAdd] = useState(false);
  const rightClick = e => {
    e.preventDefault();
    setLocation({ x: e.clientX, y: e.clientY });
    setContext(true);
  };
  return (
    <div className="w-4/5 relative">
      <MenuProvider id="trackMenu">
        <div className="" style={{ height: '55vh' }}>
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
      </MenuProvider>
      <TrackContextMenu />

      <AddTrack shown={displayAdd} />
    </div>
  );
};

export default MainSequence;
