import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import Select from 'react-select';
import { midiInputOptions, outputOptions } from '../../utils/selectOptions';
import { ioSelect } from '../../styles/react-select-custom';
import Volume from '../Volume/Volume';
import { connect } from 'react-redux';
import { selectedTrack } from '../../actions/selected';
const TrackInfo = ({ trackInfo, selectedTrack }) => {
  const { name, type, instrument, effects, color, output, input } = trackInfo;

  return (
    <div>
      <div id="infobar" onCLick={() => selectedTrack(name, type)} className={`w-full  text-xs border-r-2 border-b-1 border-gray-100 ${color}`}>
        <div className={color}>{name}</div>

        <div className="flex">
          <div className="flex">
            <div className="">
              <p>input</p>
              <Select options={midiInputOptions} styles={ioSelect} defaultInputValue={input} />
            </div>
            <div>
              <p>output</p>
              <Select options={outputOptions} styles={ioSelect} defaultInputValue={output} />
            </div>
          </div>
          <div>
            <div id="track-buttons" className="flex">
              <button className="track-btn">
                <MdFiberManualRecord />
              </button>
              <button className="track-btn">
                <p className="font-extrabold">M</p>
              </button>
              <button className="track-btn">
                <p className="font-extrabold">S</p>
              </button>
            </div>
            <Volume color="bg-green-300" initialValue={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { selectedTrack })(TrackInfo);
