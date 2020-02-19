import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Track from './Track';
import SequenceContextMenu from '../ContextMenu/SeqenceContextMenu';
import ReactModal from 'react-modal';

import { MenuProvider, Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import TrackContextMenu from '../ContextMenu/TrackContextMenu';
import AddTrack from './AddTrack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const dummyTracks = [
  { name: 'Melody', type: 'Midi', instrument: 'FMSynth', effects: ['Distortion', 'Reverb'], color: 'bg-red-300', output: 'Master', input: 'Keyboard' },
  { name: 'Drums', type: 'Midi', instrument: 'DrumMachine', effects: ['Distortion', 'Reverb'], color: 'bg-pink-300', output: 'Master', input: 'Keyboard' },
  { name: 'Voice', type: 'Audio', instrument: 'Audio', effects: ['Distortion', 'Reverb'], color: 'bg-blue-300', output: 'Master', input: 'Input 1' }
];

const MainSequence = ({ tracks }) => {
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
                {tracks.map((track, position) => (
                  <Track key={position} trackInfo={track} position={position} />
                ))}
              </div>
            </Scrollbars>
          </section>
        </div>
      </MenuProvider>
      <TrackContextMenu setDisplayAdd={setDisplayAdd} />
      <ReactModal
        isOpen={displayAdd}
        onRequestClose={() => setDisplayAdd(false)}
        style={{
          overlay: {},
          content: { padding: 0, width: '300px', height: '300px', top: '50%', left: '50%', marginLeft: '-150px', marginTop: '-200px' }
        }}
      >
        <AddTrack setDisplayAdd={setDisplayAdd} />
      </ReactModal>
    </div>
  );
};

MainSequence.propTypes = {
  tracks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tracks: state.tracksReducer.tracks
});
export default connect(mapStateToProps, {})(MainSequence);
