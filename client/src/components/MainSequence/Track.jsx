import React from 'react';
import TrackInfo from './TrackInfo';

const Track = ({ trackInfo }) => {
  const { name, type, instrument, effects, color, output, input } = trackInfo;
  return (
    <div className="bg-gray-400 w-full flex flex-row ">
      <div className="flex w-full">
        <TrackInfo trackInfo={trackInfo} />
        <div className="w-full border border-gray-200"></div>
      </div>
    </div>
  );
};

export default Track;
